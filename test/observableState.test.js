const { BehaviorSubject, Subject, of, concat } = require("rxjs")
const { take, takeWhile } = require("rxjs/operators")
const { ObservableState } = require("../src")

describe('new ObservableState', () => {
    
    test('does not throw', () => {
        expect(()=>{
            new ObservableState()
        }).not.toThrow()
        expect(()=>{
            new ObservableState(true)
        }).not.toThrow()
        expect(()=>{
            new ObservableState(null)
        }).not.toThrow()
        expect(()=>{
            new ObservableState(void 0)
        }).not.toThrow()
        expect(()=>{
            new ObservableState(0)
        }).not.toThrow()
        expect(()=>{
            new ObservableState(1)
        }).not.toThrow()
        expect(()=>{
            new ObservableState('1')
        }).not.toThrow()
        expect(()=>{
            new ObservableState(new Object())
        }).not.toThrow()
        expect(()=>{
            new ObservableState([])
        }).not.toThrow()
        expect(()=>{
            new ObservableState([1])
        }).not.toThrow()
        expect(()=>{
            new ObservableState({a:{b:0}})
        }).not.toThrow()
    })

    test('does throw', () => {
        expect(()=>{
            new ObservableState(() => {})
        }).toThrow("initial state cannot be a function")
    })
})

describe("ObservableState.subscribe", () => {
    
    // throw and not throw is all over the place ... obs.subscribe works in mysterious ways
    test('does throw', () => {

        expect(() => {
            new ObservableState(100).subscribe(1)
        }).toThrow()
        expect(() => {
            new ObservableState(100).subscribe('s')
        }).toThrow()
    })

    test('does not throw', () => {

        expect(() => {
            new ObservableState(100).subscribe()
        }).not.toThrow()
        expect(() => {
            new ObservableState(100).subscribe(void 0)
        }).not.toThrow()
        expect(() => {
            new ObservableState(100).subscribe(null)
        }).not.toThrow()
        expect(() => { // not sure why BehaviorSubject accepts 0 as a param
            new ObservableState(100).subscribe(0)
        }).not.toThrow()
        expect(() => {
            new ObservableState(100).subscribe('')
        }).not.toThrow()
        expect(() => {
            new ObservableState(100).subscribe({})
        }).not.toThrow()
        expect(() => {
            new ObservableState(100).subscribe({a: () => {}})
        }).not.toThrow()
    })

    test('value emitted on subscribe', done => {

        let next = jest.fn()
        concat(
            new ObservableState(void 0).pipe(take(1)),
            new ObservableState(1).pipe(take(1)),
            new ObservableState(true).pipe(take(1)),
            new ObservableState(false).pipe(take(1)),
            new ObservableState([]).pipe(take(1)),
            new ObservableState({}).pipe(take(1)),
            new ObservableState('str').pipe(take(1)),
            new ObservableState({a: {b: 1}}).pipe(take(1)),
            new ObservableState(0).pipe(take(1)),
        ).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenNthCalledWith(1, void 0)
                expect(next).toHaveBeenNthCalledWith(2, 1)
                expect(next).toHaveBeenNthCalledWith(3, true)
                expect(next).toHaveBeenNthCalledWith(4, false)
                expect(next).toHaveBeenNthCalledWith(5, [])
                expect(next).toHaveBeenNthCalledWith(6, {})
                expect(next).toHaveBeenNthCalledWith(7, 'str')
                expect(next).toHaveBeenNthCalledWith(8, {a: {b: 1}})
                expect(next).toHaveBeenNthCalledWith(9, 0)
                done()
            }
        })
    })

})

describe('ObservableState.next', () => {
    test('does not throw', () => {
        expect(() => {
            new ObservableState().next()
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(void 0)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(null)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(0)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(1)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(-1)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(1.5)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(true)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(false)
        }).not.toThrow()
        expect(() => {
            new ObservableState().next('')
        }).not.toThrow()
        expect(() => {
            new ObservableState().next({})
        }).not.toThrow()
        expect(() => {
            new ObservableState().next({a:1})
        }).not.toThrow()
        expect(() => {
            new ObservableState().next([])
        }).not.toThrow()
        expect(() => {
            new ObservableState().next(()=>{})
        }).not.toThrow()
    })

    test('emits correct value', done => {
        let next = jest.fn()
        let _date = new Date()

        let _obsArr = [
            new ObservableState().next().pipe(take(1)),
            new ObservableState().next(void 0).pipe(take(1)),
            new ObservableState().next(null).pipe(take(1)),
            new ObservableState().next(0).pipe(take(1)),
            new ObservableState().next(1).pipe(take(1)),
            new ObservableState().next(-1).pipe(take(1)),
            new ObservableState().next(1.5).pipe(take(1)),
            new ObservableState().next(true).pipe(take(1)),
            new ObservableState().next(false).pipe(take(1)),
            new ObservableState().next('').pipe(take(1)),
            new ObservableState().next({}).pipe(take(1)),
            new ObservableState().next({a:1}).pipe(take(1)),
            new ObservableState().next([]).pipe(take(1)),
            new ObservableState().next(_date).pipe(take(1)),
            new ObservableState().next(()=>{}).pipe(take(1)),
            new ObservableState().next(()=>4).pipe(take(1)),
            new ObservableState().next(1).next(2).pipe(take(1)),
        ]
        concat(..._obsArr)
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenNthCalledWith(1, undefined)
                expect(next).toHaveBeenNthCalledWith(2, void 0)
                expect(next).toHaveBeenNthCalledWith(3, null)
                expect(next).toHaveBeenNthCalledWith(4, 0)
                expect(next).toHaveBeenNthCalledWith(5, 1)
                expect(next).toHaveBeenNthCalledWith(6, -1)
                expect(next).toHaveBeenNthCalledWith(7, 1.5)
                expect(next).toHaveBeenNthCalledWith(8, true)
                expect(next).toHaveBeenNthCalledWith(9, false)
                expect(next).toHaveBeenNthCalledWith(10, '')
                expect(next).toHaveBeenNthCalledWith(11, {})
                expect(next).toHaveBeenNthCalledWith(12, {a:1})
                expect(next).toHaveBeenNthCalledWith(13, [])
                expect(next).toHaveBeenNthCalledWith(14, _date)
                expect(next).toHaveBeenNthCalledWith(15, undefined)
                expect(next).toHaveBeenNthCalledWith(16, 4)
                expect(next).toHaveBeenNthCalledWith(17, 2)
                done()
            }
        })
    })

    test('with existing path', done => {
        let next = jest.fn()
        let d1 = new Date()
        let d2 = new Date(d1.toLocaleDateString())
        let _state = {
            a: {
                b: 'str'
            },
            c: {d: true, f: []},
            g: d1,
            h: {i: false, j: {}}
        }

        let o = new ObservableState(_state)
        o.pipe(takeWhile(x => x !== 'END')).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenNthCalledWith(1, _state)
                expect(next).toHaveBeenNthCalledWith(2, expect.objectContaining({a: {b: 'string'}}))
                expect(next).toHaveBeenNthCalledWith(3, expect.objectContaining({a: {b: 'pneu'}}))
                expect(next).toHaveBeenNthCalledWith(4, expect.objectContaining({h: expect.objectContaining({i: 444})}))
                expect(next).toHaveBeenNthCalledWith(5, expect.objectContaining({g: d2}))
                expect(next).toHaveBeenNthCalledWith(6, expect.objectContaining({
                    c: expect.objectContaining({
                        f: expect.arrayContaining([1.6])
                    })
                }))
                expect(next).toHaveBeenNthCalledWith(7, expect.objectContaining({
                    c: expect.objectContaining({
                        f: expect.arrayContaining([1.6, true])
                    })
                }))
                expect(next).toHaveBeenNthCalledWith(8, expect.objectContaining({
                    c: expect.objectContaining({
                        f: expect.arrayContaining([1.6, true, 20])
                    })
                }))
                expect(next).toHaveBeenNthCalledWith(9, expect.objectContaining({
                    c: expect.objectContaining({
                        f: expect.arrayContaining([1.6, true, null])
                    })
                }))

                expect(next).toHaveBeenCalledTimes(9)
                done()
            }
        })

        o
            .next('string', 'a.b')
            .next('pneu', 'a.b')
            .next(444, ['h', 'i'])
            .next(d2, 'g')
            .next(prev => {
                prev.push(1.6)
                return prev
            }, ['c', 'f'])
            .next(prev => {
                prev.push(true)
                return prev
            }, ['c', 'f'])
            .next(prev => {
                prev[2] = 20
                return prev
            }, ['c', 'f'])
            .next(null, ['c', 'f', 2])
            .next('END')
        
    })

    test('with unexisting path', done => {
        let next = jest.fn()
        let o = new ObservableState()

        o.pipe(takeWhile(x => x !== 'END'))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenNthCalledWith(1, void 0)
                    expect(next).toHaveBeenNthCalledWith(2, {})
                    expect(next).toHaveBeenNthCalledWith(3, {new : {}})
                    expect(next).toHaveBeenNthCalledWith(4, {new : {number: 1}})
                    
                    expect(next).toHaveBeenCalledTimes(4)
                    done()
                }
            })
        o
            .next({})
            .next({}, 'new')
            .next(1, 'new.number')
            .next('END')
    })

})

describe('ObservableState.path', () => {
    test('path = undefined', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path()
        state.subscribe(s => {
            expect(s).toBe(_state)
            expect(s.a.b).toEqual('foo')
            done()
        })
    })
    test('path = empty array', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path([])
        state.subscribe(s => {
            expect(s).toBe(_state)
            expect(s.a.b).toEqual('foo')
            done()
        })
    })
    test('path = single prop string', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path('a')
        state.subscribe(s => {
            expect(s).toBe(_state.a)
            expect(s.b).toEqual('foo')
            done()
        })
    })
    test('path = single prop array', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path(['a'])
        state.subscribe(s => {
            expect(s).toBe(_state.a)
            expect(s.b).toEqual('foo')
            done()
        })
    })
    test('path = valid multi props string', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path('a.b')
        state.subscribe(s => {
            expect(s).toBe(_state.a.b)
            expect(s).toEqual('foo')
            done()
        })
    })
    test('path = valid multi props array', done => {
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path(['a', 'b'])
        state.subscribe(s => {
            expect(s).toBe(_state.a.b)
            expect(s).toEqual('foo')
            done()
        })
    })
    test('path = invalid single prop string', done => {
        let next = jest.fn()
        const _state = {a:{b:'foo'}}
        const state = new ObservableState(_state).path('v')
        state
        .pipe(take(1))
        .subscribe({
            next: next,
            complete: err => {
                expect(next).toHaveBeenCalledWith(undefined)
                done()
            }
        })
    })

})