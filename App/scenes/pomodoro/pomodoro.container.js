import { connect } from 'react-redux';
import { PomodoroComponent } from './pomodoro.component';
import { pomodoroConnector } from './pomodoro.selector'
import { setRandom } from '../../store/common/common.actions'

const mapDispatchToProps = dispatch => {
  return {
    setRandom: () => dispatch(setRandom())
  }
}

export const PomodoroContainer = 
  connect(
    pomodoroConnector,
    mapDispatchToProps
  )(PomodoroComponent);
