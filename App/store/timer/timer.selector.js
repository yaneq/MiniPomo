import moment from 'moment';

export const minutesRemainingSelector = (state) => {

}

export const calculateTimeUntil = (finishingTime) => {
  let duration = moment.duration(
    moment(finishingTime).diff(new Date())
  );
  let minutes = Math.floor(duration.asMinutes());
  let seconds = Math.floor(duration.asSeconds());

  if (!duration.isValid()) {
    return null
  } else if (duration.asSeconds() <= 0) {
    return 'Finished'
  } else {
    return (minutes >= 1)
      ? (minutes + 1) + " minutes"
      : seconds + " seconds"
  }
}

export const calculateTimePercentage = (startTime, finishingTime) => {
  if (!finishingTime) return 0
  let out = (1 -
    (finishingTime - new Date())
    / (finishingTime - startTime)
  )
  return out >= 1 ? 1 : out
}

export const timerIsActiveSelector = state => {
  return !!state.timer.timerFinishesAt
}

export const isTimerActive = state => {
  return !!state.timer.timerFinishesAt
}

export const timeUntilSelector = (state) => {
  return calculateTimeUntil(state.timer.timerFinishesAt);
}

export const timeAgoSelector = (state) => {
    return state.timer.timerFinishesAt
        ? Math.round((state.timer.timerFinishesAt.getTime() - new Date().getTime()) / 1000)
        : 'no timer set'
}
