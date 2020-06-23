import { 
    ObservableState, 
    ReducerFunction,
    InitialStateObject,
    Action
} from "./types";
import {ACTION_OBSERVABLE} from './observables'
import { stateReducer } from "./operators";
import { Observable, of, concat } from "rxjs";
import { 
    pluck, 
    shareReplay, 
    distinctUntilChanged 
} from "rxjs/operators";
import {STATE_REGISTRY} from './registry'

// used when createRxState is called without initialState
const DEFAULT_STATE = {}

/**
 * An observable emitting the hard coded ACTION that is used to initialise a state upon calling rxState.create()
 */
const INIT_STATE_ACTION$: Observable<Action> = of({type: '__INIT_STATE__'})

/**
 * Creates a new OBSERVABLE identified by <name>, that reduces the <initialState> and subsequently generated states by passing it through the <reducer> function, every time an action is dispatched via rxState.dispatch.
 * @param name the name of the created rxState
 * @param reducer the reducer function responsible for creating the next state given an incoming state and action. 
 * NOTE: It is worth noting that technically the reducer does not necessarily have to return the new state. 
 * That is because the reducer is run against an immer draft object inside a produce call.
 * @param initialState the initial state, Must have at least one property. TODO? consider if that rule is useful or detrimental.
 */
export function createRxState<T extends Record<string, any>> (
    name: string, 
    reducer: ReducerFunction<T> = (state, action) => state, 
    initialState: InitialStateObject | undefined = DEFAULT_STATE
) :ObservableState<T>
{
    // guards
    if(typeof name !== 'string') throw 'rxState:create:error: state name must be string'
    if(typeof reducer != 'function') throw 'rxState:create:error: reducer must be function'
    
    // if it exists, returns the observable state registered with the provided name
    if(STATE_REGISTRY[name]){
        return STATE_REGISTRY[name].state$
    }

    // create an observable emitting reduced state from provided params
    const _reducedState$ = concat(INIT_STATE_ACTION$, ACTION_OBSERVABLE)
        .pipe(
            // reduce state with provided reducer given emitted action
            stateReducer(initialState, reducer),
            // ensures late subscribtions get the last emitted state immediately on subscribe
            shareReplay(1)
        )
    
    const state$ = toObservableState<T>(_reducedState$)

    STATE_REGISTRY[name] = {
        state$: state$,
        reducer: reducer,
        initialState: initialState
    }

    return state$
}

/**
 * 
 * @param obs the source observable to which we will append the path method
 */
export function toObservableState<T>(obs: Observable<any> | unknown): ObservableState<T>{

    (obs as ObservableState<T>)['path'] = _path.bind(obs)

    return obs as ObservableState<T>
}

/**
 * 
 * @param path string or array of strings describing the path to the desired value inside this rxState
 * ie: state$.path('path.to.value') or state$.path(['path', 'to', 'value'])
 */
function _path<T>(path:string | Array<string>):ObservableState<T | undefined>{

    if(!path) return this;
    if(typeof path !== 'string' && 
        !Array.isArray(path)
    ) throw 'state$.path:error: path must be a string or an array of strings'

    const _path = Array.isArray(path)
        ? path
        : path.split('.')

    return this.pipe(
        // similar to lodash pluck
        pluck(..._path),
        // only changed state is emitted 
        distinctUntilChanged()
    )
}