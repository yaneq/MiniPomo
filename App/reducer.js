import { timerReducer } from './store/timer/timer.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  timer: timerReducer,
});

  