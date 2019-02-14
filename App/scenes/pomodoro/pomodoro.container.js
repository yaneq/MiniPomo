import { connect } from 'react-redux';
import moment from 'moment'
import { PomodoroComponent } from './pomodoro.component';
import { pomodoroConnector } from './pomodoro.selector'
import { setRandom } from '../../store/common/common.actions'
import { setTimer, clearTimer } from '../../store/timer/timer.actions'
import { isTimerActive } from '../../store/timer/timer.selector'

const mapStateToProps = state => {
  return {
    timerIsActive: isTimerActive(state),
    timerStartedAt: state.timer.timerStartedAt,
    timerFinishesAt: state.timer.timerFinishesAt,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRandom: () => dispatch(setRandom()),
    setTimer: () => dispatch(setTimer()),
    clearTimer: () => dispatch(clearTimer())
  }
}

export const PomodoroContainer =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PomodoroComponent);
