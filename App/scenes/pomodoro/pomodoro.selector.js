import { createStructuredSelector } from 'reselect';
import {
    timeAgoSelector,
    timeUntilSelector
} from '../../store/timer/timer.selector'

export const pomodoroConnector = createStructuredSelector({
  timeAgo: timeAgoSelector,
  timeUntil: timeUntilSelector,
  random: (state) => { return state.common.random }
});
