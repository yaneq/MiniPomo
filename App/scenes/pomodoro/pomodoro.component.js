import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './pomodoro.styles'

export class PomodoroComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      this.props.setRandom()
    }, 1000 )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Time is {this.props.timeAgo},
          Random is {this.props.random}
        </Text>
        <LottieView
          style={styles.pomodoroAnimation}
          source={require('../../../data/egg.json')}
          autoPlay
          loop
          width={400}
          height={400}
          ></LottieView>
      </View>
    );
  }
}
