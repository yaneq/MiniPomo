/** @format */

import { Navigation } from "react-native-navigation";
import {AppRegistry} from 'react-native';
import App from './App/App';
import Home from './App/components/home/home.component'
import Pomo from './App/components/pomo/pomo.component'

Navigation.registerComponent(`home`, () => Home);
Navigation.registerComponent(`pomo`, () => Pomo);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "home"
      }
    }
  });
});