import { useEffect, useMemo, useState } from "react"
import { ObservableState } from ".."

export function useObservableState<T>(state: T): [T, ObservableState<T>] {
    const initial_state = useMemo<[any, ObservableState<any>]>(() => {
        const _state = typeof state === 'function' 
            ? state()
            : state
        return _state instanceof ObservableState 
            ? [_state.getValue(), _state]
            : [_state, new ObservableState<T>(_state)]
    }, [state])

    const [stateValue, setStateValue] = useState(initial_state)

    useEffect(() => {
        const stateObs = stateValue[1]
        let sub = stateObs.subscribe(s => setStateValue([s, stateObs]))

        return () => { sub.unsubscribe() }
    }, [state])

    return stateValue
}

export default useObservableState