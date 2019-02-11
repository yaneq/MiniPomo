import { connect } from 'react-redux';
import PomodoroComponent from './pomodoro.component';

const mapStateToProps = state => {
  return {
    timer_started_at: state.timer.timer_started_at
  }
}

export const PomodoroContainer = 
  connect(
    mapStateToProps
  )(PomodoroComponent);
