# Observable State

With **simple-observable-state** (sos) : 

Manage your state with the tried and tested **Action / Reducer** pattern. **Without unnecessary boilerplate**.

Create an Observable that **emits your state** as an immutable. 

Dispatch **actions** to modify your state. 

Dispatch functions to trigger any **side effect**.

> Your observable state is a regular **Rxjs Observable** with the addition of the `path` function that allows you to target a property inside your state.

> Under the hood, sos wraps your reducer inside an Immer.produce call. So you get the benefit of **immutability** without having to think about it.

# Installation

Available on npm 
```
npm install simple-observable-state
```

# Usage

## Getting Started 

Using simple-observable-state is easy and straightforward :
```javascript
// import simple-observable-state
import s_o_s, {dispatch} from "simple-observable-state";

// define your state and how to modify it
const stateID = 'myCounter'
const initialCounter = {counter: 0}
const reduceCounter = (state, action) => {
    switch (action.type) {
        case 'increment':
            state.counter++
            break;
        case 'decrement':
            state.counter--
            break;
        default:
            return state;
    }
}

// create a HOT observable state
const counter$$ = s_o_s(stateID, reduceCounter, initialCounter)
// react to state changes
const stateSubscription = counter$$
    .subscribe(
        state => {console.log(state)},
        error => {console.warn(error)}
    )

// modify state by dispatching actions
dispatch({type: 'increment'})
dispatch({type: 'increment'})
dispatch({type: 'increment'})
dispatch({type: 'decrement'})

// output
> {counter: 0} // initial state
> {counter: 1} // increment
> {counter: 2} // increment
> {counter: 3} // increment
> {counter: 2} // decrement
```

## Emit State Property : the path method

For convenience, all Observable states expose an additional method : `path` that allows you to fetch deep into your state object **trigger logic only when a certain property has changed**.
```javascript
const initialState = {
    deep: {path: {to: {value: 'hello world'}}
}
const identityReducer = (state, action) => state

const value$$ = s_o_s('deepPathExample', identityReducer, initialState)
    .path('deep.path.to.value') // OR equivalent .path(['deep','path','to','value'])
    .subscribe(console.log)

// output
> "hello world"
```

## Re-using an existing Observable State

Observable states are created only once, and identified by a unique identifier that you provide.
```javascript
const counter1$$ = s_o_s('myCounter')
    .subscribe(console.log)
const counter2$$ = s_o_s('myCounter')
    .subscribe(console.log)

// both subscriptions will print the same values in the same order as they are being emitted by myCounter Observable state
```

## In React Hook

Observable states fit nicely inside react custom hooks :

```jsx
// useCounter.js
import {useState, useEffect} from 'react'
import s_o_s from 'simple-observable-state'

// define your state and logic once
const stateID = 'myCounter'
const initialCounter = {counter: 0}
const reduceCounter = (state, action) => {
    switch (action.type) {
        case 'increment':
            state.counter++
            break;
        case 'decrement':
            state.counter--
            break;
        default:
            return state;
    }
}

export default function useStateObservableCounter(path){
    const [state, setState] = useState(initialCounter)
    useEffect(() => {
        const state$$ = s_o_s(stateId, reduceCounter, initialCounter)
            .path(path)
        const subscription = state$$.subscribe(setState)
        return () => sub.unsubscribe()
    }
    , [path])
}

// AnyComponent.jsx
import useStateCounter from 'useStateObservableCounter'

export default function AnyComponent(){
    const counterObject = useStateCounter()
    const counterValue = useStateCunter('counter')
    return (<div>{counterObject.counter} = {counterValue}</div>)
}
```

# Reference

The library is written with Typescript and comes with types definitions.

## API

### create ( also exported as default)
```javascript
/**
 * Creates a new OBSERVABLE identified by <name>, that reduces the <initialState> and subsequently generated states by passing it through the <reducer> function, every time an action is dispatched via rxState.dispatch.
 * @param name the name of the created rxState
 * @param reducer the reducer function responsible for creating the next state given an incoming state and action. 
 * NOTE: It is worth noting that technically the reducer does not necessarily have to return the new state. 
 * That is because the reducer is run against an immer draft object inside a produce call.
 * @param initialState the initial state, Must have at least one property. TODO? consider if that rule is useful or detrimental.
 */
export function create<T extends Record<string, any>> (
    name: string, 
    reducer: ReducerFunction<T> = (state, action) => state, 
    initialState: InitialStateObject | undefined = DEFAULT_STATE
) :ObservableState<T>
```
### ObservableState.path method
```javascript
/**
 * Instance method, to pick a property or deep property from the emitted source observable state. 
 * @param path string or array of strings describing the path to the desired value inside this rxState
 * ie: state$.path('path.to.value') or state$.path(['path', 'to', 'value'])
 */
function _path<T>(path:string | Array<string>):ObservableState<T | undefined>
```

### dispatch
```javascript
/**
 * dispatch action or sideEffect to all registered reducers.
 * @param action the action to be dispatched, must be either a valid action
 */
function dispatch(action: Action | SideEffect):void
```
# Develop
TBC
## Build
TBC
## Test
This library includes a set of unit tests and tests for the most obvious use cases. So the library should be fairly stable and reliable moving forward.
# Credits
ISC @ Joel Rafalimanana