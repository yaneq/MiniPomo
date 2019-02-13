import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import { rootReducer } from './reducer';

import devToolsEnhancer from 'remote-redux-devtools';

let store = null;

export const initializeStore = () => {
  store = createStore(
    rootReducer,
    devToolsEnhancer()
  );
  return store;
}

export const getStore = () => {
  return store;
}
