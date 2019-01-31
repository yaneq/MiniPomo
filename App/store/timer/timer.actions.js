import { TIMER_ACTIONS } from './timer.constants';

export const setTimer = () => ({
  type: TIMER_ACTIONS.SET_TIMER,
});

export const clearTimer = () => ({
  type: TIMER_ACTIONS.CLEAR_TIMER,
});
