import { timerReducer } from './timer/timer.reducer'
import { commonReducer } from './common/common.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  timer: timerReducer,
  common: commonReducer,
});
