import { TIMER_ACTIONS } from './timer.constants';

export const INITIAL_STATUS_STATE = {
  timer_started_at: null,
};

export const timerReducer = (
  state = INITIAL_STATUS_STATE,
  action = {},
) => {
  switch (action.type) {
    case TIMER_ACTIONS.SET_TIMER:
      return { ...state, timer_started_at: new Date() };
    case TIMER_ACTIONS.CLEAR_TIMER:
      return { ...state, timer_started_at: null };
    default:
      return state;
  }
};
