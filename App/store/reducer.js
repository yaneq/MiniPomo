import { timerReducer } from './timer/timer.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  timer: timerReducer,
});
