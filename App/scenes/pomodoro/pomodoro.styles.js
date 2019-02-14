import { StyleSheet } from 'react-native';

const baseStyles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#722673',
    color: '#ffffff',
    margin: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff'
  }
})

export const styles = StyleSheet.create({
  ...baseStyles,
  container: {
    backgroundColor: "#33ddff",
    flex: 1,
    paddingTop: 50
  },
  controls: {
  },
  pomodoroAnimationContainer: {
    flex: 1,
    backgroundColor: '#00ff00'
  },
  pomodoroAnimation: {
    flex: 1,
    backgroundColor: '#722673'
  },
  timerContainer: {
    padding: 30,
  },
  timer: {
    fontSize: 50,
  },
  startButton: {
    ...baseStyles.button,
    borderColor: '#ff0000'
  },
  stopButton: {
    ...baseStyles.button,
    borderColor: '#ff0000'
  }
})
