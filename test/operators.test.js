const {stateReducer, sideEffect, validateAction} = require('../src/operators')
const {Subject, of} = require('rxjs')

describe('positive tests : stateReducer operator reduces state', () => {
    const dummyAction = {type: 'dummy/action'}
    const $action$ = new Subject()
    
    test('identity reducer', done => {
        
        const initialState = {
            foo: {bar: {a: 'a'}},
            number: 10,
            string: 'str',
            bool: true
        }
        const identityReducer = (state, action) => state
        
        const sub = $action$.pipe(
            stateReducer(initialState, identityReducer)
        ).subscribe(
            state => {
                expect(state).toBe(initialState)
                expect(state.number).toBe(10)
                expect(state.string).toBe('str')
                expect(state.bool).toBe(true)
                done()
            },
            done
        )

        $action$.next(dummyAction)
        sub.unsubscribe()
    })
    
    test('return next immutable state', done => {

        const S = {
            foo: {bar: 'foo'},
            bar: {foo: 'bar'}
        }
        // modifies state.foo
        const reducer = (state, action) => {
            state.foo = {foo: 'foo'}
        }
        
        const sub = $action$.pipe(
            stateReducer(S, reducer)
        ).subscribe(
            state => {
                // root state has changed object ref
                expect(state).not.toBe(S)
                // untouched property is carried by reference onto new state
                expect(state.bar).toBe(S.bar)
                // touched property is given new object ref
                expect(state.foo).not.toBe(S.foo)
                // value has actually changed
                expect(state.foo.foo).toEqual('foo')
                done()
            },
            done
        )

        $action$.next(dummyAction)
        sub.unsubscribe()
    })
})

describe('negative tests : stateReducer operator reduces state', () => {
    test('initialState argument is required', () => {

        expect(() => {
            stateReducer()
        }).toThrow(/initial state is required/)
    })
    
    test('reducer argument is required', () => {
        
        const undefinedReducer = undefined
        const initialState = {foo: 'bar'}

        expect(() => {
            stateReducer(initialState, undefinedReducer)
        }).toThrow(/reducer argument must be a function/)
    })
})

describe('positive tests : sideEffect operator', () => {
    const $action$ = new Subject()

    test('side effect is not emitted downstream', done => {
        const _sideEffect = jest.fn()
        const success = jest.fn()
        const sub = $action$.pipe(
            sideEffect
        ).subscribe(
            success,
            done
        )

        $action$.next(_sideEffect)
        expect(success).not.toHaveBeenCalled()

        sub.unsubscribe()
        done()
    })
    test('side effect is called', done => {
        const _sideEffect = jest.fn()
        const sub = $action$.pipe(
            sideEffect
        ).subscribe(
            ()=>{},
            done
        )

        $action$.next(_sideEffect)
        expect(_sideEffect).toHaveBeenCalledTimes(1)

        sub.unsubscribe()
        done()
    })
    test('action is emitted downstream', done => {
        const action = {type: 'dummy/action'}
        const success = jest.fn()
        const sub = $action$.subscribe(
            success,
            done
        )

        $action$.next(action)
        expect(success).toHaveBeenCalledTimes(1)

        sub.unsubscribe()
        done()
    })
})

describe('positive tests : validateAction operator', () => {
    test('side effect is emitted downstream', done => {
        const _sideEffect = jest.fn()
        const action$ = of(_sideEffect)
        action$
            .pipe(validateAction)
            .subscribe(
                se => {
                    expect(se).toBe(_sideEffect)
                },
                done,
                ()=>{done()}
            )
    })
    test('action is emitted downstream', done => {
        const action = {type: 'valid/action'}
        const action$ = of(action)
        action$
            .pipe(validateAction)
            .subscribe(
                a => {
                    expect(a).toBe(action)
                },
                done,
                ()=>{done()}
            )
    })
})
describe('negative tests : validateAction operator', () => {
    test('undefined is not emitted downstream', done => {
        const action = undefined
        const success = jest.fn()
        const action$ = of(action)
        action$
            .pipe(validateAction)
            .subscribe(
                success,
                done,
                ()=>{
                    expect(success).not.toHaveBeenCalled()
                    done()
                }
            )
    })
    test('null is not emitted downstream', done => {
        const action = null
        const success = jest.fn()
        const action$ = of(action)
        action$
            .pipe(validateAction)
            .subscribe(
                success,
                done,
                ()=>{
                    expect(success).not.toHaveBeenCalled()
                    done()
                }
            )
    })
    test('action without type is not emitted downstream', done => {
        const action = {payload: 'boo'}
        const success = jest.fn()
        const action$ = of(action)
        action$
            .pipe(validateAction)
            .subscribe(
                success,
                done,
                ()=>{
                    expect(success).not.toHaveBeenCalled()
                    done()
                }
            )
    })
})