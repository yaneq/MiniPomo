/** @format */

import { Navigation } from "react-native-navigation";
import {AppRegistry} from 'react-native';
import App from './App/App';
import ShowName from './App/components/show-name/show-name.component'
import LottieTest from './App/components/lottie-test/lottie-test.component'

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`navigation.showName`, () => ShowName);
Navigation.registerComponent(`navigation.lottieTest`, () => LottieTest);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});