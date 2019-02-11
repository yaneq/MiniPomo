import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './pomodoro.styles'

export default class PomodoroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Time is {this.props.timer_started_at ? 'set' : ''}</Text>
            source={require('../../../data/data.json')}
            autoPlay
            loop
        ></LottieView>
      </View>
    );
  }
}
