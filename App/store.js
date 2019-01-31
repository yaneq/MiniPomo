import { createStore, applyMiddleware, compose } from 'redux';
import { AsyncStorage } from 'react-native';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import { createLogger } from 'redux-logger';
// import devToolsEnhancer from 'remote-redux-devtools';
import { rootReducer } from './reducer';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
  );

  const persistenceConfig = {
    storage: AsyncStorage
  };
  
  return store;
};
