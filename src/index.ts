import {ACTION_SUBJECT} from './observables'

// create a state observable if it does not already exists
export {createRxState as state$$} from './create-rx-state'

// dispatch and action
export const dispatch = ACTION_SUBJECT.next.bind(ACTION_SUBJECT)