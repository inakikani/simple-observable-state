import {Immutable} from "immer"
import {Observable} from 'rxjs'

export type InitialStateObject = object
export type SideEffect = () => void
export interface Action {
    type: string;
    payload?: any | SideEffect
}

export type RegistryEntry = {
    state$: ObservableState<any>,
    reducer: ReducerFunction<any>,
    initialState: InitialStateObject,
    currentState?: any
}

export type State<T> = Immutable<T>

export type ReducerFunction<S> = (state: S, action: Action) => S

export interface ObservableState<T> extends Observable<T> {
    path: <S>(path?: string)=>ObservableState<S>
}