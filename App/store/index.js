import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import { rootReducer } from './reducer';

export const initializeStore = () => {
  const store = createStore(
    rootReducer,
  );
  return store;
}
