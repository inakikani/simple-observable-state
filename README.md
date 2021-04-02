# Observable State

# Installation

Available on npm 
```
npm install simple-observable-state
```

# Get Started

```javascript

// define initial state
const initial_todos = {
    todos: {
        deep: {arr: []}
    },
    newTodoInputText: ''
}

// create a new Observable State with initial state value
const todos$ = new ObservableState(initial_todos)

// path returns a new ObservableState for the target state value
const inputText$  = todosObs.path('newTodoInputText') 
// path lets you target deep state values
const todosArr$ = todosObs.path('todos.deep.arr')
// you can even use path to set new properties
const formName$ = todos$.path('formName').next('What do you have to do ?')

// push next state value with observableState.next()
function changeInputText(txt){
    // next method, allows you push your next state to all subscribers, just like a regular Subject
    inputText$.next(txt) 
}
function addTodo(){
    // next method also allows you to provide a function ! The function is given the current state, ready for you to change however needed
    todosArr$.next(function(todos){
        todos.push(todos$.path('newTodoInputText').value)
    })
}

```

# Reference

## ObservableState class

*extends rxjs.BehaviorSubject*

### **constructor(initial_state, options?)**

- **initial_state**:`any` - the initial value for the new ObservableState. 
- **options**:`OptionsObject` - an optional object with options to create new ObservableState (used mostly internally)

### **OptionsObject ({id, source?, async?, pluck?, ignoreUndefinedFromSource?})**
- id: string;
- source?: ObservableState<any>,
- async?: Promise<any>,
- pluck?: string[],
- ignoreUndefinedFromSource?: boolean

### **observableState.path(path: string | string[])**
Returns a new ObservableState derived from the source `observableState`.
`path` accepts dot notation in a string or an array of strings :
```javascript
const state$ = new ObservableState({deep: {value:'hello world'}})
const value$ = state$.path('deep.value')
// is equivalent to 
const value$ = state$.path(['deep','value'])

state$.subscribe(state => console.log('state = ',state))
value$.subscribe(val => console.log('value = ',val))

// $> state = {deep: {value:'hello world'}}
// $> value = "hello world"
```

Use `path` with `next` to modify your state clinically ! Changes deep in the state are automatically picked up by the parent states. Ideal to split your state and delegate deep values to nested components.
```javascript
const state$ = new ObservableState({deep: {value:'hello world'}})
const value$ = state$.path('deep.value')

state$.subscribe(state => console.log('state =', state))
value$.next('Goodbye world')

// $> state = {deep: {value:'hello world'}}
// $> state = {deep: {value:'Goodbye world'}}

```
### **observableState.next(any & StateProducerFunction)**
Returns `observableState` to allow method chaining.  
`next` is used to modify the last state value from `osbervableState`.  
`next` accepts any value that will be the next emitted state.   
`next` also accepts a function as a parameter, it is called with the last state value changes to the state here will be reflected in the next emitted state.

```javascript
const state$ = new ObservableState({deep: {value:'hello world'}})

state$.next({deep: {value:'XXXxxxXXX'}})
// is equivalent to 
state$.next(function(state){
    state.deep.value = 'XXXxxxXXX'
})

```

Note: notice that the function does not return a new state ! Under the hood, the value/function is wrapped in immer.produce to create a new immutable state.
Courtesy of immer.js, the function does not even need to return the new state value ;)

It is possible to chain `next` calls to modify the state sequentially :
```javascript
const state$ = new ObservableState(['first'])

state$
    .next(function(state){state.push('second')})
    .next(function(state){state.pop()})
// state = ['first']

```

### **observableState.subscribe(subscriber)**
Subscribe to ObservableState. Use this function just as you would a regular rxjs.Observable
### **observableState.value**
Inherited from rxjs.BehaviorSubject. Handy to get the current state value
### **observableState.getValue()**
Inherited from rxjs.BehaviorSubject. Handy to get the current state value

# Develop
This package is developed with Typescript.

Start watcher to run test suite on code changes :
```
npm run dev
```

## Build
Builds in `dist/` folder
```
npm run build
```

## Test
The library comes with a Jest test suite.
```
npm run test
<!-- or start dev server to watch file changes -->
npm run dev
```

# Credits
ISC @ Joel Rafalimanana