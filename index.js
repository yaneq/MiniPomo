/** @format */

import { Navigation } from "react-native-navigation";
import {AppRegistry} from 'react-native';
import App from './App/App';
import ShowName from './App/components/show-name/show-name.component'

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`navigation.showName`, () => ShowName);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});