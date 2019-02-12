// import moment from 'moment';

export const timeAgoSelector = (state) => {
    return state.timer.timerStartedAt 
        ? Math.round((new Date().getTime() - state.timer.timerStartedAt.getTime()) / 1000)
        : 'no timer set'

}
