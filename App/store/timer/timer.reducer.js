import { TIMER_ACTIONS } from './timer.constants';
import moment from 'moment'

export const INITIAL_STATE = {
  timerFinishesAt: null,
};

export const timerReducer = (
  state = INITIAL_STATE,
  action = {},
) => {
  switch (action.type) {
    case TIMER_ACTIONS.SET_TIMER:
      return { ...state, timerFinishesAt: moment(new Date()).add(30, 'm').toDate() };
    case TIMER_ACTIONS.CLEAR_TIMER:
      return { ...state, timerFinishesAt: null };
    default:
      return state;
  }
};
