import { TIMER_ACTIONS } from './timer.constants';

export const INITIAL_STATE = {
  timerStartedAt: null,
};

export const timerReducer = (
  state = INITIAL_STATE,
  action = {},
) => {
  switch (action.type) {
    case TIMER_ACTIONS.SET_TIMER:
      return { ...state, timerStartedAt: new Date() };
    case TIMER_ACTIONS.CLEAR_TIMER:
      return { ...state, timerStartedAt: null };
    default:
      return state;
  }
};
