import type { Store } from 'redux';
import type { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import HomeComponent from '../scenes/home/home.component'

// export * from './navigation.sagas';
// export * from './navigation.actions';
// export * from './navigation.constants';
// export * from './with-navigation';
// export * from './navigation.reducer';
// export * from './navigation.selectors';
// export * from './scene-identifiers.js';
// export * from './hardware';

export const initializeNavigation = (
    scenes,
    store,
    provider,
    options,
  ) => {
    scenes.forEach((scene) => {
      Navigation.registerComponentWithRedux(scene.screen, () => scene.component, provider, store);
    })
    // try {
    //   Navigation.startSingleScreenApp(options);
    //   return Promise.resolve(scenes);
    // } catch (e) {
    //   return Promise.reject(e);
    // }
  };
  