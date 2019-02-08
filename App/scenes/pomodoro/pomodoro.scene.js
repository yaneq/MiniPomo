import { SCENE_IDS } from '../../navigation/scene-identifiers';
import { PomodoroContainer } from './pomodoro.container';

export const PomodoroScene = {
  screen: SCENE_IDS.POMODORO,
  component: PomodoroContainer,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: "#69D0E9FF",
    statusBarTextColorScheme: 'dark',
  },
};
