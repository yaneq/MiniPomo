import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './home.styles'
import { showName } from './home.handlers'

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home is where the heart is!</Text>
        <TouchableOpacity
          onPress={showName}
        >
          <Text>Show other component</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
