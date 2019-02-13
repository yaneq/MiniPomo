// import moment from 'moment';

export const minutesRemainingSelector = (state) => {

}

export const timeAgoSelector = (state) => {
    return state.timer.timerFinishesAt 
        ? Math.round((state.timer.timerFinishesAt.getTime() - new Date().getTime()) / 1000)
        : 'no timer set'

}
