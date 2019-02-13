import { connect } from 'react-redux';
import { HomeComponent } from './home.component';
import { setTimer, clearTimer } from '../../store/timer/timer.actions'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTimer: () => {dispatch(setTimer())},
    clearTimer: () => {dispatch(clearTimer())}
  }
}

export const HomeContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeComponent);
