const {
    dispatch
} = require('../src/index')
const {
    createRxState,
} = require('../src/create-rx-state')
const {
    of
} = require('rxjs')
const {
    take, 
    skip,
    timeoutWith,
    takeLast
} = require('rxjs/operators')
const {
    clearRegistry
} = require('../src/manage-rx-state')

beforeAll(clearRegistry)
describe('createRxState: default arguments', () => {
    let state$;
    
    test('create with just a name', () => {
        const validName = 'createRxState: default arguments'
        expect(() => {
            state$ = createRxState(validName)
        }).not.toThrow()
    })
    
    test('subscribe immediately emmits', done => {
        const next = jest.fn()
        state$
            .pipe(
                take(1)
            )
            .subscribe(
                next,
                done,
                ()=>{
                    expect(next).toHaveBeenCalledTimes(1)
                    done()
                }
            )
    })

    test('subscribe immediately emmits, only once if no action dispatched', done => {
        const next = jest.fn()
        state$
            .pipe(
                timeoutWith(4000, of('done'))
            )
            .subscribe(
                next,
                done,
                ()=>{
                    expect(next).toHaveBeenCalledTimes(2)
                    done()
                }
            )
    })

    test('immediately emitted state is default state', done => {
        state$
            .pipe(
                take(1)
            )
            .subscribe(
                state => {
                    // match the default state
                    expect(state).toEqual({})
                },
                done,
                done
            )
    })
    
    test('default reducer returns unchanged state', done => {
        const next = jest.fn()
        state$
            .pipe(
                timeoutWith(200, of('done')),
                takeLast(2)
            )
            .subscribe(
                next,
                done,
                () => {
                    expect(next).toHaveBeenNthCalledWith(1, {})
                    expect(next).toHaveBeenLastCalledWith('done')
                    done()
                }
            )
        dispatch({type: 'valid/action'})
    })
})

describe('createRxState: errors', () => {
    test('createRxState requires a name argument', () => {
        expect(() => {createRxState().toThrow('rxState:create:error: state name must be string')})
    })
    test('createRxState expects name argument to be string', () => {
        expect(() => {createRxState({}).toThrow('rxState:create:error: state name must be string')})
        expect(() => {createRxState([]).toThrow('rxState:create:error: state name must be string')})
        expect(() => {createRxState(12).toThrow('rxState:create:error: state name must be string')})
        expect(() => {createRxState(true).toThrow('rxState:create:error: state name must be string')})
        expect(() => {createRxState(false).toThrow('rxState:create:error: state name must be string')})
    })
    test('createRxState expects reducer argument to be function', () => {
        const stateName = 'createRxState requires a reducer argument'
        expect(() => {createRxState(stateName, {}).toThrow()})
        expect(() => {createRxState(stateName, []).toThrow()})
        expect(() => {createRxState(stateName, 99).toThrow()})
        expect(() => {createRxState(stateName, true).toThrow()})
        expect(() => {createRxState(stateName, false).toThrow()})
    })
})

describe('createRxState: reducer function', () => {
    
    const stateName = 'createRxState: reducer function'
    const initialState = {
        n: 1,
        str: 'str',
        bool: false
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                state.n = state.n+action.payload
                return state
            case 'substract':
                state.n = state.n-action.payload 
                break;
            default:
                return state;
        }
    }
    const state$ = createRxState(stateName, reducer, initialState)

    test('state is reduced on incomming valid action', done => {
        state$
            .pipe(
                skip(1),
                take(1)
            )
            .subscribe(
                state => {
                    expect(state.n).toBe(2)
                },
                done,
                done
            )
        dispatch({type: 'add', payload: 1})
    })

    test('new subscription receive the last reduced state', done => {
        state$
            .pipe(
                take(1)
            )
            .subscribe(
                state => {
                    expect(state.n).toBe(2)
                },
                done,
                done
            )
    })

    // TODO : isolate this test case
    test('reducer only need to mutate state. ie: createRxState wraps reducer logic inside immer.produce call', done => {
        state$
            .pipe(
                skip(1),
                take(1)
            ).subscribe(
                state => {
                    expect(state.n).toBe(0)
                },
                done,
                done
            )
        dispatch({type: 'substract', payload: 2})
    })
})