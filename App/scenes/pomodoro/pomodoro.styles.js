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
    flex: 1,
    paddingTop: 20
  },
  pomodoroAnimationContainer: {
    flex: 1,
  },
  pomodoroAnimation: {
    flex: 1,
  },
  timerContainer: {
    padding: 30,
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
  },
})
