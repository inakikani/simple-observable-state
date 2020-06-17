import {ACTION_SUBJECT} from './observables'
import {createRxState as state$$} from './create'
// dispatch and action
export const dispatch = ACTION_SUBJECT.next.bind(ACTION_SUBJECT)
export default state$$

