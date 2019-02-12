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
        {/* <LottieView
            source={require('../../../data/data.json')}
            autoPlay
            loop
        ></LottieView> */}
      </View>
    );
  }
}
