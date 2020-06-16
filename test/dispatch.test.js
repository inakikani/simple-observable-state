const {dispatch} = require('../src')
const {ACTION_OBSERVABLE} = require('../src/observables')

describe('dispatch: action', () => {
    const sideEffect = jest.fn()
    const valid_test_action1 = {type: 'test/valid/action'}
    const valid_test_action2 = {type: 'test/valid/action', payload: 'payload'}
    const valid_test_action3 = {type: 'test/valid/action', payload: sideEffect}

    test('ACTION_OBSERVABLE dispatches valid actions : no payload', done => {
        const sub = ACTION_OBSERVABLE
        .subscribe(
            action => {
                expect(action).toEqual(valid_test_action1)
                done()
            },
            done
        )
    
        dispatch(valid_test_action1)
        sub.unsubscribe()
    })

    test('ACTION_OBSERVABLE dispatches valid actions : with payload', done => {
        const sub = ACTION_OBSERVABLE
        .subscribe(
            action => {
                expect(action).toEqual(valid_test_action2)
                done()
            },
            done
        )
    
        dispatch(valid_test_action2)
        sub.unsubscribe()
    })
    
    test('ACTION_OBSERVABLE dispatches valid actions : with sideEffect', done => {
        const sub = ACTION_OBSERVABLE
        .subscribe(
            action => {
                expect(action).toEqual(valid_test_action3)
                done()
            },
            done
        )
    
        dispatch(valid_test_action3)
        sub.unsubscribe()
    })
})

describe('dispatch: negative tests', () => {
    const invalid_test_action1 = {payload: 'payload'}
    const invalid_test_action2 = {}
    const _next = jest.fn()

    test('ACTION_OBSERVABLE filters out invalid actions : no type property', done => {
        const sub = ACTION_OBSERVABLE
        .subscribe(
            _next,
            done
        )
    
        dispatch(invalid_test_action1)
        sub.unsubscribe()
        expect(_next).not.toHaveBeenCalled()
        done()
    })
    
    test('ACTION_OBSERVABLE filters out invalid actions : empty object', done => {
        const sub = ACTION_OBSERVABLE
        .subscribe(
            _next,
            done
        )
    
        dispatch(invalid_test_action2)
        sub.unsubscribe()
        expect(_next).not.toHaveBeenCalled()
        done()
    })
    
    test('ACTION_OBSERVABLE filters out invalid actions : undefined', done => {
        const sub = ACTION_OBSERVABLE
        .subscribe(
            _next,
            done
        )
    
        dispatch(void 0)
        sub.unsubscribe()
        expect(_next).not.toHaveBeenCalled()
        done()
    })
})