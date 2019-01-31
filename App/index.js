import { Navigation } from "react-native-navigation";
// import { AppRegistry } from 'react-native';
import { configureStore } from './store';
import { scenes } from './scenes'
import { SCENE_IDS } from './navigation/scene-identifiers'

import { initializeNavigation } from './navigation'

const store = configureStore();

initializeNavigation(scenes)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: SCENE_IDS.HOME
      }
    }
  });
});
