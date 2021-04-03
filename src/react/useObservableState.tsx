import { useEffect, useState } from "react"
import { ObservableState } from ".."

export function useObservableState(state: any){
    const [stateValue, setStateValue] = useState(state instanceof ObservableState ? state.getValue() : state)
    const stateObs = state instanceof ObservableState
        ? state
        : new ObservableState(state)
    useEffect( () => {
        let sub = stateObs.subscribe(s => setStateValue(s))

        return () => {sub.unsubscribe()}
    }, [])

    return [stateValue, stateObs]
}