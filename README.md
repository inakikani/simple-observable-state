# Simple Observable State
Expressive and boilerplate free state management, with immutability baked in.

## Installation

Available on npm 
```
npm install simple-observable-state
```

## What it looks like
```typescript
// an input with simple-observable-state, with react component, using custom hook useObservableState
function Input({ observableState, ...props }) {
    return <input
        type="text"
        value={observableState.getValue()}
        onChange={e => observableState.next(e.target.value)}
        {...props}
        >
    </input>
}

// using the Input component
function Form() {
    const [formObject, formObservableState] = useObservableState({ username: '', password: '' })
    const usernameObs = useMemo(() => formObservableState.path('username'),[])
    const passwordObs = useMemo(() => formObservableState.path('password'),[])

    return <div>
        {formObject.username} : {formObject.password}
        <form
            onSubmit={e => { e.preventDefault(); console.log(form) }}
        >
            <Input observableState={usernameObs} />
            <Input observableState={passwordObs} />
        </form>
    </div>
}

```

## Get Started

```javascript

// define initial state
const initial_todos = {
    todos: {
        list: [],
        name: ''
    },
    newTodoInputValue: ''
}

const stored_todos = {
    list: ['foo', 'bar'],
    name: 'My first todo list'
}

// create a new Observable State with initial state value
const todos$ = new ObservableState(initial_todos)

// traverse your observableState property tree
const todosList$ = todos$.path('todos.list')
const newTodo$  = todos$.path('newTodoInputValue')

// set new property on your state
const listName$ = todos$.path('nameTextInputValue').next('January goals:')

// push next state value with observableState.next()
// subscribers will get the new immutable state value automatically, anywhere
function changeInputText(txt){
    newTodo$.next(txt)
}

// provide a state reducer to create the next state value.
function addTodo(){
    // reducer function is called with the current state value
    cons addTodoReducer = function(todos){
        todos.push(todos$.path('newTodoInputText').getValue())
    }
    todosList$.next(addTodoReducer)
}

```

## [React & Simple Observable State](https://github.com/inakikani/simple-observable-state/wiki/React-&-Simple-Observable-State)
Check this [WIKI PAGE](https://github.com/inakikani/simple-observable-state/wiki/React-&-Simple-Observable-State) for a working example of React and SOS working together.  

### useObservableState custom hook

```javascript
import {useObservableState} from 'simple-observable-state'
```


## Reference

### ObservableState class

*extends rxjs.BehaviorSubject*

#### **constructor(initial_state, options?)**

- **initial_state**:`any` - the initial value for the new ObservableState. 
- **options**:`OptionsObject` - an optional object with options to create new ObservableState (used internally - you likely don't need to use any options)

#### **OptionsObject ({id, source?, async?, pluck?, ignoreUndefinedFromSource?})**
- id: string;
- source?: ObservableState<any>,
- async?: Promise<any>,
- pluck?: string[],
- ignoreUndefinedFromSource?: boolean

#### **observableState.path(path: string | string[])**
Returns a new observableState derived from the source `observableState`.  
The new osbservableState emits the value found at `path` in the source observableState.  
`path` accepts dot notation string or an array of strings :
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
#### **observableState.next(any & StateProducerFunction)**
Returns `observableState` to allow method chaining.  
`next` is used to modify the last state value from `osbervableState`.  
`next` accepts any value that will be the next emitted state.   
`next` also accepts a function as a parameter, it is called with the last state value.   
> All changes to the state inside StateProducerFunction will be reflected in the next emitted state. Unless StateProducerFunction returns an object; in which case the next emitted state will be that object.  

> note: this library uses **Immer** to create immutable states. StateProducerFunction is essentially an Immer *Producer* function. 

```javascript
const state$ = new ObservableState({deep: {value:'hello world'}})

state$.next({deep: {value:'XXXxxxXXX'}})
// is equivalent to 
state$.next(function(state){
    state.deep.value = 'XXXxxxXXX'
})

```

It is possible to chain `next` calls to modify the state sequentially :
```javascript
const state$ = new ObservableState(['first'])

state$
    .next(function(state){state.push('second')})
    .next(function(state){state.pop()})
// state = ['first']

```

#### **observableState.subscribe(subscriber)**
Subscribe to ObservableState. Use this function just as you would a regular rxjs.Observable
#### **observableState.value**
Inherited from rxjs.BehaviorSubject. Handy to get the current state value
#### **observableState.getValue()**
Inherited from rxjs.BehaviorSubject. Handy to get the current state value

## Develop
This package is developed with Typescript.

Start watcher to run test suite on code changes :
```
npm run dev
```

### Build
Builds in `dist/` folder
```
npm run build

```

### Publish
Publish changes onto npm
```
npm publish

```

### Test
The library comes with a Jest test suite.
```
npm run test
<!-- or start dev server to watch file changes -->
npm run dev
```

## Credits
ISC @ Joel Rafalimanana