import { TIMER_ACTIONS } from './timer.constants';
import moment from 'moment'
import config from '../../config'

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
        timerFinishesAt: moment(startTime).add(config.timerDuration, 's').toDate()
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
