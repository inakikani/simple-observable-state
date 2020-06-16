import {RegistryEntry } from "./types";

/**
 * STATE_REGISTRY stores created states, keyed by their state name
 */
export const STATE_REGISTRY: Record<string, RegistryEntry> = {}

/**
 * teardown state : delete all properties in that state. After teardownState, the state is always equal to an empty object = {}
 * This probably should not be used as it may throw errors in subsequent actions if the provided reducer does not account for missing properties.
 * to remove the state entirely use removeState
 * @param name : the name of the state to teardown
 */
// export function teardownState(name: string):ObservableState<{}>{
//     return {} as ObservableState<{}>
// }

/**
 * remove state : removes the state entirely from the registry of created states.
 * If you want to keep the state registered but empty use teardownState
 * @param name : the name of the state to remove
 */
// export function removeState(name: string):void{}

/**
 * resets the state to its initial state
 * @param name the name of the state to reset to its initial state
 */
// export function resetState(name: string): ObservableState<any>{
//     return {} as ObservableState<any>
// }

export function clearRegistry(): void{
    for (let key in STATE_REGISTRY){
        delete STATE_REGISTRY[key]
    }
}