import { COMMON_ACTIONS } from './common.constants';

export const INITIAL_STATE = {
  random: null,
};

export const commonReducer = (
  state = INITIAL_STATE,
  action = {},
) => {
  switch (action.type) {
    case COMMON_ACTIONS.SET_RANDOM:
      return { ...state, random: Math.random() }
    default:
      return state;
  }
};
