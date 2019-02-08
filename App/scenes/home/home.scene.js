import { SCENE_IDS } from '../../navigation/scene-identifiers';
// import { HomeContainer } from './home.container';
import { HomeContainer } from './home.container';

export const HomeScene = {
  screen: SCENE_IDS.HOME,
  component: HomeContainer,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: "#69D0E9FF",
    statusBarTextColorScheme: 'dark',
  },
};
