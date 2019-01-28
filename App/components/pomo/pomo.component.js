import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Pomo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.containter}>
        <Text>Time is {123}</Text>
        <LottieView
            source={require('../../../data/data.json')}
            autoPlay
            loop
        ></LottieView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containter: {
        backgroundColor: "#dddddd",
        flex: 1,
    }
})