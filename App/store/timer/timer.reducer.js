import { TIMER_ACTIONS } from './timer.constants';

export const INITIAL_STATUS_STATE = {
  timer_started_at: 'initial store value',
};

export const timerReducer = (
  state = INITIAL_STATUS_STATE,
  action = {},
) => {
  switch (action.type) {
    case TIMER_ACTIONS.SET_TIMER:
      return { ...state, timer_started_at: 'store value set' };
    case TIMER_ACTIONS.CLEAR_TIMER:
      return { ...state, timer_started_at: 'store value cleared' };
    default:
      return state;
  }
};
