import { configureStore } from './store';
import { Provider } from 'react-redux'

import { Navigation } from "react-native-navigation";
import { scenes } from './scenes'
import { SCENE_IDS } from './navigation/scene-identifiers'
import { initializeStore } from './store'
import { initializeNavigation } from './navigation'

const store = initializeStore();

initializeNavigation(scenes, store, Provider)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: SCENE_IDS.POMODORO
      }
    }
  });
});
