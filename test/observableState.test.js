const { BehaviorSubject, Subject, of, concat, EMPTY, from } = require("rxjs")
const { take, takeWhile, delay } = require("rxjs/operators")
const { ObservableState } = require("../src")

describe('new ObservableState', () => {
    
    test('does not throw initial = undefined', () => {
        expect(()=>{
            new ObservableState()
        }).not.toThrow()
    })  
    test('does not throw initial = true', () => {
        expect(()=>{
            new ObservableState(true)
        }).not.toThrow()
    })  
    test('does not throw initial = null', () => {
        expect(()=>{
            new ObservableState(null)
        }).not.toThrow()
    })  
    test('does not throw initial = void 0', () => {
        expect(()=>{
            new ObservableState(void 0)
        }).not.toThrow()
    })  
    test('does not throw initial = 0', () => {
        expect(()=>{
            new ObservableState(0)
        }).not.toThrow()
    })  
    test('does not throw initial = 1', () => {
        expect(()=>{
            new ObservableState(1)
        }).not.toThrow()
    })  
    test('does not throw initial = "1"', () => {
        expect(()=>{
            new ObservableState('1')
        }).not.toThrow()
    })  
    test('does not throw initial = new Object()', () => {
        expect(()=>{
            new ObservableState(new Object())
        }).not.toThrow()
    })  
    test('does not throw initial = []', () => {
        expect(()=>{
            new ObservableState([])
        }).not.toThrow()
    })  
    test('does not throw initial = [1]', () => {
        expect(()=>{
            new ObservableState([1])
        }).not.toThrow()
    })  
    test('does not throw initial = {a:{b:0}}', () => {
        expect(()=>{
            new ObservableState({a:{b:0}})
        }).not.toThrow()
    })

    test('does throw initial = function', () => {
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


    test('value emitted on subscribe no initial', done => {
        let next = jest.fn()
        new ObservableState()
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(void 0)
                    done()
                }
            })
    })

    test('value emitted on subscribe = void 0', done => {
        let next = jest.fn()
        new ObservableState(void 0).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith(void 0)
                done()
            }
        })
    })
    test('value emitted on subscribe = 1', done => {
        let next = jest.fn()
        new ObservableState(1).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith(1)
                done()
            }
        })
    })
    test('value emitted on subscribe = true', done => {
        let next = jest.fn()
        new ObservableState(true).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith(true)
                done()
            }
        })
    })
    test('value emitted on subscribe = false', done => {
        let next = jest.fn()
        new ObservableState(false).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith(false)
                done()
            }
        })
    })
    test('value emitted on subscribe = []', done => {
        let next = jest.fn()
        new ObservableState([]).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith([])
                done()
            }
        })
    })
    test('value emitted on subscribe = {}', done => {
        let next = jest.fn()
        new ObservableState({}).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith({})
                done()
            }
        })
    })
    test('value emitted on subscribe = "str"', done => {
        let next = jest.fn()
        new ObservableState('str').pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith('str')
                done()
            }
        })
    })
    test('value emitted on subscribe = {a: {b: 1}}', done => {
        let next = jest.fn()
        new ObservableState({a: {b: 1}}).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith({a: {b: 1}})
                done()
            }
        })
    })
    test('value emitted on subscribe = 0', done => {
        let next = jest.fn()
        new ObservableState(0).pipe(take(1))
        .subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenCalledWith(0)
                done()
            }
        })
    })

})

describe('ObservableState.next', () => {
        
    test('does not throw - no value', () => {
        expect(() => {
            new ObservableState().next()
        }).not.toThrow()
    })    
    test('does not throw - next void 0', () => {
        expect(() => {
            new ObservableState().next(void 0)
        }).not.toThrow()
    })
    test('does not throw - next null', () => {
        expect(() => {
            new ObservableState().next(null)
        }).not.toThrow()
    })
    test('does not throw - next 0', () => {
        expect(() => {
            new ObservableState().next(0)
        }).not.toThrow()
    })
    test('does not throw - next 1', () => {
        expect(() => {
            new ObservableState().next(1)
        }).not.toThrow()
    })
    test('does not throw - next -1', () => {
        expect(() => {
            new ObservableState().next(-1)
        }).not.toThrow()
    })
    test('does not throw - next 1.5', () => {
        expect(() => {
            new ObservableState().next(1.5)
        }).not.toThrow()
    })
    test('does not throw - next true', () => {
        expect(() => {
            new ObservableState().next(true)
        }).not.toThrow()
    })
    test('does not throw - next false', () => {
        expect(() => {
            new ObservableState().next(false)
        }).not.toThrow()
    })
    test('does not throw - next ""', () => {
        expect(() => {
            new ObservableState().next('')
        }).not.toThrow()
    })
    test('does not throw - next {}', () => {
        expect(() => {
            new ObservableState().next({})
        }).not.toThrow()
    })
    test('does not throw - next {a:1}', () => {
        expect(() => {
            new ObservableState().next({a:1})
        }).not.toThrow()
    })
    test('does not throw - next []', () => {
        expect(() => {
            new ObservableState().next([])
        }).not.toThrow()
    })
    test('does not throw - next ()=>{}', () => {
        expect(() => {
            new ObservableState().next(()=>{})
        }).not.toThrow()
    })
    test('does not throw - next Observable<any>', () => {
        expect(() => {
            new ObservableState().next(of(1))
        }).not.toThrow()
    })
    test('does not throw - next Promise<any>', () => {
        expect(() => {
            new ObservableState().next(Promise.resolve(1))
        }).not.toThrow()
    })
    test('does not throw - next Empty Observable', () => {
        expect(() => {
            new ObservableState().next(EMPTY)
        }).not.toThrow()
    })


    test('emits correct value = no value', done => {
        let next = jest.fn()
        new ObservableState().next()
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(undefined)
                    done()
                }
            })
    })
    test('emits correct value = void 0', done => {
        let next = jest.fn()
        new ObservableState().next(void 0)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(void 0)
                    done()
                }
            })
    })
    test('emits correct value = null', done => {
        let next = jest.fn()
        new ObservableState().next(null)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(null)
                    done()
                }
            })
    })
    test('emits correct value = 0', done => {
        let next = jest.fn()
        new ObservableState().next(0)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(0)
                    done()
                }
            })
    })
    test('emits correct value = 1', done => {
        let next = jest.fn()
        new ObservableState().next(1)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(1)
                    done()
                }
            })
    })
    test('emits correct value = -1', done => {
        let next = jest.fn()
        new ObservableState().next(-1)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(-1)
                    done()
                }
            })
    })
    test('emits correct value = 1.5', done => {
        let next = jest.fn()
        new ObservableState().next(1.5)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(1.5)
                    done()
                }
            })
    })
    test('emits correct value = true', done => {
        let next = jest.fn()
        new ObservableState().next(true)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(true)
                    done()
                }
            })
    })
    test('emits correct value = false', done => {
        let next = jest.fn()
        new ObservableState().next(false)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(false)
                    done()
                }
            })
    })
    test('emits correct value = ""', done => {
        let next = jest.fn()
        new ObservableState().next('')
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith('')
                    done()
                }
            })
    })
    test('emits correct value = {}', done => {
        let next = jest.fn()
        new ObservableState().next({})
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith({})
                    done()
                }
            })
    })
    test('emits correct value = {a:1}', done => {
        let next = jest.fn()
        new ObservableState().next({a:1})
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith({a:1})
                    done()
                }
            })
    })
    test('emits correct value = []', done => {
        let next = jest.fn()
        new ObservableState().next([])
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith([])
                    done()
                }
            })
    })
    test('emits correct value = _date', done => {
        let next = jest.fn()
        let _date = new Date()
        new ObservableState().next(_date)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    done()
                    expect(next).toHaveBeenCalledWith(_date)
                }
            })
    })
    test('emits correct value = ()=>{}', done => {
        let next = jest.fn()
        new ObservableState().next(()=>{})
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(undefined)
                    done()
                }
            })
    })
    test('emits correct value = ()=>4', done => {
        let next = jest.fn()
        new ObservableState().next(()=>4)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(4)
                    done()
                }
            })
    })
    test('emits correct async value = Observable<1>', done => {
        let next = jest.fn()
        new ObservableState().next(of(1).pipe(delay(50))) // the delay here ensures that we test the full flow: ie: on | - - - undefined - - - async value | - > 
            .pipe(take(2))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenLastCalledWith(1)
                    done()
                }
            })
    })
    test('emits correct async value = Observable<"foo">', done => {
        let next = jest.fn()
        new ObservableState().next(of("foo").pipe(delay(50)))
            .pipe(take(2))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenLastCalledWith("foo")
                    done()
                }
            })
    })
    test('emits correct async value = Promise<"foo">', done => {
        let next = jest.fn()
        new ObservableState().next(from(Promise.resolve("foo")).pipe(delay(50)))
            .pipe(take(2))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenLastCalledWith("foo")
                    done()
                }
            })
    })
    test('emits correct async value = Promise<()=>4>', done => {
        let next = jest.fn()
        new ObservableState().next(from(Promise.resolve(()=>4)).pipe(delay(50)))
            .pipe(take(2))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenLastCalledWith(4)
                    done()
                }
            })
    })
    test('emits correct value (chaining) = next(1).next(2)', done => {
        let next = jest.fn()
        new ObservableState().next(1).next(2)
            .pipe(take(1))
            .subscribe({
                next: next,
                complete: () => {
                    expect(next).toHaveBeenCalledWith(2)
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
    test('path = valid array index str', done => {
        const _state = ['value']
        const state = new ObservableState(_state).path('0')
        state.subscribe(s => {
            expect(s).toBe(_state[0])
            expect(s).toEqual('value')
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

describe('Subscription complex test cases', () => {
    test('deep state change is emitted to all ObservableStates targeting the same value', done => {
        let next = jest.fn()
        let next2 = jest.fn()
        
        const _state = ['value']
        const state = new ObservableState(_state)
        const first$ = state.path('0')
        const second$ = state.path('0')

        first$.pipe(
            take(2)
        ).subscribe({
            next: next,
            complete: () => {
                expect(next).toHaveBeenNthCalledWith(1, 'value')
                expect(next).toHaveBeenNthCalledWith(2, 'xxx')
                expect(next2).toHaveBeenNthCalledWith(1, undefined)
                expect(next2).toHaveBeenCalledTimes(1)
                done()
            }
        })

        state.path('1').pipe(
            take(2)
        ).subscribe({
            next: next2
        })

        second$.next('xxx')

    })

    test('all subscribers get notified of state changes', done => {
        let next = jest.fn()
        let nextParent = jest.fn()
        let nextValue1 = jest.fn()
        let nextValue1bis = jest.fn()
        let nextValue2 = jest.fn()
        let nextConstant = jest.fn()

        const _state = {
            deep: {
                value: 'hello',
                constant: 'foo'
            }
        }
        const state$ = new ObservableState(_state)

        let parent$ = state$.path('deep')
        let value1$ = parent$.path('value')
        let value2$ = state$.path('deep.value')
        let constant$ = parent$.path('constant')

        parent$.subscribe(nextParent)
        value1$.subscribe(nextValue1)
        value1$.subscribe(nextValue1bis)
        value2$.subscribe(nextValue2)
        constant$.subscribe(nextConstant)

        state$
            .pipe(
                takeWhile(x => x !== 'END')
            )
            .subscribe({
                next: val => {
                    let v1$ = parent$.path('value')
                    expect(val).toEqual(state$.getValue())
                    expect(v1$.getValue()).toEqual(state$.path('deep.value').getValue())
                    expect(v1$.getValue()).toEqual(val.deep.value)
                },
                complete: () => {
                    // initial subscribe
                    expect(nextParent).toHaveBeenNthCalledWith(1,{value: 'hello', constant: 'foo'})
                    expect(nextValue1).toHaveBeenNthCalledWith(1, 'hello')
                    expect(nextValue2).toHaveBeenNthCalledWith(1, 'hello')
                    expect(nextConstant).toHaveBeenNthCalledWith(1, 'foo')
                    
                    // first parent changes : value : bye
                    expect(nextParent).toHaveBeenNthCalledWith(2,{value: 'bye', constant: 'foo'})
                    expect(nextValue1).toHaveBeenNthCalledWith(2,'bye')
                    expect(nextValue2).toHaveBeenNthCalledWith(2,'bye')
                    expect(nextConstant).toHaveBeenNthCalledWith(2, 'foo')

                    // value1$.next(42)
                    expect(nextParent).toHaveBeenNthCalledWith(3,{value: 42, constant: 'foo'})
                    expect(nextValue1).toHaveBeenNthCalledWith(3,42)
                    expect(nextValue2).toHaveBeenNthCalledWith(3,42)
                    expect(nextConstant).toHaveBeenNthCalledWith(3, 'foo')
                    
                    // value2$.next(42)
                    expect(nextParent).toHaveBeenNthCalledWith(4,{value: 42, constant: 'foo'})
                    expect(nextValue1).toHaveBeenNthCalledWith(4,42)
                    expect(nextValue2).toHaveBeenNthCalledWith(4,42)
                    expect(nextConstant).toHaveBeenNthCalledWith(4, 'foo')

                    // value2$.next({a: true})
                    expect(nextParent).toHaveBeenNthCalledWith(5,{value: {a: true}, constant: 'foo'})
                    expect(nextValue1).toHaveBeenNthCalledWith(5,{a: true})
                    expect(nextValue1bis).toHaveBeenNthCalledWith(5,{a: true})
                    expect(nextValue2).toHaveBeenNthCalledWith(5,{a: true})
                    expect(nextConstant).toHaveBeenNthCalledWith(5, 'foo')


                    // Test is finished
                    done()
                }
            })

        // change state 
        state$.next({deep: {value: 'bye', constant: 'foo'}})
        value1$.next(42)
        value2$.next(42)
        value2$.next({a: true})
        state$.next('END')
    })
})