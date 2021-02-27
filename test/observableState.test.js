const { BehaviorSubject, Subject } = require("rxjs")
const { take } = require("rxjs/operators")
const { ObservableState } = require("../src")

describe('creating ObservableState', () => {
    test('no params', () => {
        expect(()=>{
            new ObservableState()
        }).not.toThrow()
    })

    test('new Obs with an initial state, no options', done => {
        expect(()=>{
            let x = new ObservableState({a:{b:'foo'}})
            console.log(x)
        }).not.toThrow()
        done()
    })
    test('first value emitted', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state)
        state.subscribe(s => {
            expect(s).toBe(_state)
            expect(s.a.b).toEqual('foo')
            done()
        })
    })
    test('test path method, no param', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path()
        state.subscribe(s => {
            expect(s).toBe(_state)
            expect(s.a.b).toEqual('foo')
            done()
        })
    })
    test('test path method, with string path', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path('a')
        state.subscribe(s => {
            expect(s).toBe(_state.a)
            expect(s.b).toEqual('foo')
            done()
        })
    })
    test('test path method, with array path', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path(['a', 'b'])
        state.subscribe(s => {
            expect(s).toBe(_state.a.b)
            expect(s).toEqual('foo')
            done()
        })
    })
})

describe('emitting new state', () => {
    let _state = {a: {b: 'foo'}, c: 200}
    
    test('set state to undefined', done => {
        let next = jest.fn()
        let s = new ObservableState({..._state})
        s.pipe(take(2)).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledTimes(2)
                expect(next).toHaveBeenNthCalledWith(2, undefined)
                done()
            }
        })
        s.next()
    })
    test('set state to new state', done => {
        let next = jest.fn()
        let newState = {
            ..._state,
            c: 400,
            d: 'bar'
        }
        let s = new ObservableState({..._state})

        s.pipe(take(2)).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledTimes(2)
                expect(next).toHaveBeenNthCalledWith(1, _state)
                expect(next).toHaveBeenNthCalledWith(2, newState)
                done()
            }
        })
        s.next(newState)
    })
    test('set state prop to undefined via path', done => {
        let next = jest.fn()
        let s = new ObservableState({..._state}).path('c')
        s.pipe(take(2)).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledTimes(2)
                expect(next).toHaveBeenNthCalledWith(1, 200)
                expect(next).toHaveBeenNthCalledWith(2, undefined)
                done()
            }
        })
        s.next()
    })
    test('set state deep prop to new value via path', done => {
        let next = jest.fn()
        let s = new ObservableState({..._state}).path('c')
        s.pipe(take(3)).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledTimes(3)
                expect(next).toHaveBeenNthCalledWith(1, 200)
                expect(next).toHaveBeenNthCalledWith(2, undefined)
                expect(next).toHaveBeenNthCalledWith(3, 300)
                done()
            }
        })
        s.next()
        s.next(300)
    })
})

// describe('test sandpit, used for anything', () => {
//     test('subject on subscribe', done => {
//         let s = new BehaviorSubject(1)
//         let o1 = s.subscribe()
//     })
// })