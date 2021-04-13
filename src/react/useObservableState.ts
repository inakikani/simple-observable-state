import { useEffect, useMemo, useState } from "react"
import { ObservableState } from ".."

export function useObservableState(state: any) {
    
    const initial_state = useMemo(() => {
        return state instanceof ObservableState 
            ? [state.getValue(), state] 
            : [state, new ObservableState(state)]
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