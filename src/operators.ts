import {
    Observable,
    UnaryFunction
} from 'rxjs'
import {Action, SideEffect, ReducerFunction} from './types'
import { scan, tap, filter, shareReplay, distinctUntilChanged } from 'rxjs/operators'
import produce, { Immutable } from 'immer'

/**
 * validate incoming actions, only SideEffect and Action are emitted downstream
 * @param action$ : source Observable provided within the pipe operator
 */
export const validateAction :UnaryFunction<Observable<any>, Observable<Action | SideEffect>> = action$ => {
    return action$.pipe(
        filter(action => typeof action === 'function' || !!action?.type)
    )
}

/**
 * reduce the state given incoming actions.
 * @param initialState : the initial object state
 * @param reducer : the ReducerFunction, wrapped in immer.produce, the reducer generates the next immutable state
 */
export function stateReducer(initialState: Immutable<any>, reducer: ReducerFunction<any>): UnaryFunction<Observable<Action>, Observable<any>>{
    if(!initialState) throw 'operators:stateReducer: initial state is required'
    if(!reducer || typeof reducer != 'function') throw 'operators:stateReducer: reducer argument must be a function'
    return (action$) => {
        return action$
            .pipe(
                scan(
                    // reduce state using immer to return the next Immutable state
                    (state, action) => produce(reducer)(state, action), 
                    // with initial state
                    initialState
                ),
                // only changed state is emitted 
                distinctUntilChanged(),
                // ensures late subscribtions get the last emitted state immediately on subscribe
                shareReplay(1)
            )
    }
}

/**
 * runs incomming SideEffects from source Observable of actions. Only Action are emitted downstream.
 * @param action$ : source Observable emitting a stream of Action & SideEffect
 */
export const sideEffect: UnaryFunction<Observable<Action | SideEffect>, Observable<Action>> = (action$) => {
    const actionOnly$ = action$.pipe(
        tap( action => {
            typeof action === 'function' && action()
        }),
        filter(action => typeof action !== 'function')
    )
    return actionOnly$ as Observable<Action>
}