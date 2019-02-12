import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './home.styles'
import { openPomodoro } from './home.handlers'

export class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home is where the heart is!</Text>
        <Text>Current time is {this.props.timerStartedAt ? 'set' : ''}</Text>
        <TouchableOpacity
          onPress={openPomodoro}
        >
          <Text>Show other component</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.props.setTimer}
        >
          <Text>Set timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.props.clearTimer}
        >
          <Text>Clear timer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
