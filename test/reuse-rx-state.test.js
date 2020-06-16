const {
    createRxState: createSlice
} = require('../src/create-rx-state')
const {
    of,
    concat,
} = require('rxjs')
const {
    take,
    tap,
    timeoutWith,
} = require('rxjs/operators')
const {
    dispatch
} = require('../src')
const {
    clearRegistry
} = require('../src/manage-rx-state')

beforeAll(clearRegistry)
describe('createSlice: reuse slice by name', () => {
    
    test('create > subscribe', done => {
        const sliceName = 'create > subscribe'
        const initialState = {value: 'x'}
        const _slice$ = createSlice(sliceName, undefined, initialState)
        _slice$
            .pipe(take(1))
            .subscribe(
                state => {
                    expect(state).toBe(initialState)
                },
                done,
                done
            )
    })
    
    test('create > create again > subscribe ==> slice is not overriden', done => {
        const sliceName = 'create > create again > subscribe ==> slice is not overriden'
        // create
        createSlice(sliceName)

        // create again
        const newReducer = (state, action) => ({value: 'not reduced by default reducer'})
        const newInitialState = {value: 'new initial'}
        const _slice$ = createSlice(sliceName, newReducer, newInitialState)
        
        // subscribe
        _slice$
        .pipe(
            take(1)
        )
        .subscribe(
            value => {
                expect(value).toEqual({})
            },
            done,
            done
        )
    })

    test('create > emit > create again > subscribe', done => {
        const sliceName = 'create > emit > create again > subscribe'
        const reducer = simpleTestReducer(sliceName)
        // create 
        const create1 = createSlice(sliceName, reducer).pipe(take(1)) // initial state is default = {}

        // emit
        const dispatchAction = of('dispatch').pipe(
            tap(x => {
                dispatch({type: sliceName, payload: 'new state'})
                dispatch({type: sliceName, payload: 'new state 2'})
            })
        )

        // create again 
        const create2 = createSlice(sliceName).pipe(take(1))
        
        // orchestrate / run assertions
        const asserts = jest.fn()
        concat(
            create1,
            dispatchAction,
            create2
        ).subscribe(
            asserts,
            done,
            () => {
                expect(asserts).toHaveBeenNthCalledWith(1, {})
                expect(asserts).toHaveBeenNthCalledWith(2, 'dispatch')
                expect(asserts).toHaveBeenNthCalledWith(3, {value: 'new state 2'})
                expect(asserts).toHaveBeenCalledTimes(3)
                done()
            }
        )
    })
})

describe('createSlice: reuse slice : multiple concurrent observers', () => {
    
    test('subscribe > emit > subscribe > emit > subscribe', done => {
        
        const sliceName = 'create > multiple concurrent subscriptions'
        const reducer = simpleTestReducer(sliceName)
        const timeoutMS = 200
        
        // next mock functions
        const n1 = jest.fn()
        const n2 = jest.fn()
        const n3 = jest.fn()
        
        // observables to test
        let obs1, obs2, obs3;
        
        obs1 = createSlice(sliceName, reducer, {value: 0}).pipe(
            timeoutWith(timeoutMS, of('done1'))
        )
        obs1.subscribe(n1, done)

        obs1.pipe(take(1)).subscribe(
            null, done, () => {
                dispatch({type: sliceName, payload: 1})
                obs2 = createSlice(sliceName).pipe(
                    timeoutWith(timeoutMS, of('done2'))
                )
                obs2.subscribe(n2)
            }
        )
        obs2.pipe(take(1)).subscribe(
            null, done, () => {
                dispatch({type: sliceName, payload: 2})
                obs3 = createSlice(sliceName).pipe(
                    timeoutWith(timeoutMS, of('done3'))
                )
                obs3.subscribe(n3)
            }
        )

        // concat completes when all observables have completed
        concat(obs1, obs2, obs3).subscribe(null, done, () => {
            // assert obs1 emitted values 
            expect(n1).toHaveBeenNthCalledWith(1, {value: 0})
            expect(n1).toHaveBeenNthCalledWith(2, {value: 1})
            expect(n1).toHaveBeenNthCalledWith(3, {value: 2})
            expect(n1).toHaveBeenNthCalledWith(4, 'done1')
            expect(n1).toHaveBeenCalledTimes(4)
            // assert obs2 emitted values
            expect(n2).toHaveBeenNthCalledWith(1, {value: 1})
            expect(n2).toHaveBeenNthCalledWith(2, {value: 2})
            expect(n2).toHaveBeenNthCalledWith(3, 'done2')
            expect(n2).toHaveBeenCalledTimes(3)
            // assert obs3 emitted values
            expect(n3).toHaveBeenNthCalledWith(1, {value: 2})
            expect(n3).toHaveBeenNthCalledWith(2, 'done3')
            expect(n3).toHaveBeenCalledTimes(2)
            done()
        })
    })
})

function simpleTestReducer(singleActionName){
    return (state, action) => {
        switch (action.type) {
            case singleActionName:
                state.value = action.payload
                break;
            default:
                break;
        }
    }
}