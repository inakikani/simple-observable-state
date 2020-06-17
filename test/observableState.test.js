const {
    createRxState,
    toObservableState
} = require('../src/create')
const {
    timeoutWith,
    take
} = require('rxjs/operators')
const {
    of
} = require('rxjs')
const {dispatch} = require('../src')

describe('toObservableState: returns an ObservableState', () => {
    let _os$;
    test('toObservableState does not throw', () => {
        expect(() => {
            _os$ = toObservableState(of(1))
        }).not.toThrow()
    })
    test('returned ObservableState is a Subscribable', () => {
        expect(() => {
            const sub = _os$.subscribe()
            sub.unsubscribe()
        }).not.toThrow()
    })
    test('returned ObservableState has a path method', () => {
        expect(_os$).toHaveProperty('path')
        expect(typeof _os$.path).toBe('function')
    })
    test('', () => {})
})


describe('ObservableState.path: subscribe to path', () => {
    const stateName = 'pathTestState'
    const reducer = (state, action) => {
        return action.payload
    }
    const initialState = {
        path: {value: 'pathed value'}
    }
    const state$ = createRxState(stateName, reducer, initialState)

    test('path returns observable of state property', done => {
        state$
            .path('path.value')
            .pipe(take(1))
            .subscribe(
                value => {
                    expect(value).toBe('pathed value')
                },
                done,
                done
            )
    })
    test('path value is not emitted if it has not changed', done => {
        const next = jest.fn()
        const nextState = jest.fn()
        const state1 = {
            path: {value: 'changed value'}
        }
        const state2 = {
            path: {value: 'changed value'},
            aside: 42
        }

        state$
            .path('path.value')
            .pipe(timeoutWith(2500, of('done')))
            .subscribe(
                next,
                done,
                () => {
                    expect(next).toHaveBeenNthCalledWith(1, 'pathed value')
                    expect(next).toHaveBeenNthCalledWith(2, 'changed value')
                    expect(next).not.toHaveBeenNthCalledWith(3, 'changed value')
                    expect(next).toHaveBeenLastCalledWith('done')
                    // whilst the state should have emitted for initial subscribe and 2 dispatched actions
                    expect(nextState).toHaveBeenCalledTimes(3)
                    expect(nextState).toHaveBeenLastCalledWith(state2)
                    done()
                }
            )

        state$.subscribe(
            nextState
        )
        
        dispatch({
            type: 'change/value', 
            payload: state1
        })
        dispatch({
            type: 'change/state', 
            payload: state2
        })
    })
})