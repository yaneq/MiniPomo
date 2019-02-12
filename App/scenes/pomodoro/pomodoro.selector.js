import { createStructuredSelector } from 'reselect';
import { timeAgoSelector } from '../../store/timer/timer.selector'

export const pomodoroConnector = createStructuredSelector({
  timeAgo: timeAgoSelector,
  random: (state) => { return state.common.random }
});
