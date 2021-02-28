import {ACTION_SUBJECT} from './observables'
import {createRxState} from './create'
export * as v2 from './ObservableStateClassV2'
/**
 * dispatch action or sideEffect to all registered reducers.
 * @param action the action to be dispatched, must be either a valid action
 */
export const dispatch = ACTION_SUBJECT.next.bind(ACTION_SUBJECT)
export {createRxState as create} from './create'
export default createRxState

