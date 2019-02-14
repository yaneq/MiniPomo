import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './pomodoro.styles'
import { calculateTimeUntil, calculateTimePercentage } from '../../store/timer/timer.selector'

export class PomodoroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  tick() {
    Animated.timing(
      this.state.progress,
      {
        toValue: calculateTimePercentage(this.props.timerStartedAt, this.props.timerFinishesAt) || 0,
        duration: 900
      },
    ).start();
    this.forceUpdate();
  }

  componentDidMount() {
    this.interval = setInterval(
      this.tick.bind(this),
      1000
    )
  }

  render() {
    let { setTimer, clearTimer } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Text sytle={styles.timer}>
            {calculateTimeUntil(this.props.timerFinishesAt)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.pomodoroAnimationContainer}
          onPress={this.props.setTimer}
        >
          <LottieView
            style={styles.pomodoroAnimation}
            source={require('../../../data/egg.json')}
            progress={this.state.progress}
            >
          </LottieView>
        </TouchableOpacity>
      </View>
    );
  }
}
