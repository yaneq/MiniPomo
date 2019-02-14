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
      let startTime = new Date()
      return {
        ...state,
        timerStartedAt: startTime,
        timerFinishesAt: moment(startTime).add(10, 's').toDate()
      };
    case TIMER_ACTIONS.CLEAR_TIMER:
      return {
        ...state,
        timerStartedAt: null,
        timerFinishesAt: null
      };
    default:
      return state;
  }
};
