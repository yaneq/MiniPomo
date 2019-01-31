import { SCENE_IDS } from '../../navigation/scene-identifiers';
// import { HomeContainer } from './home.container';
import HomeComponent from './home.component';

export const HomeScene = {
  screen: SCENE_IDS.HOME,
  component: HomeComponent,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: "#69D0E9FF",
    statusBarTextColorScheme: 'dark',
  },
};
