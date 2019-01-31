import { SCENE_IDS } from '../../navigation/scene-identifiers';
import PomodoroComponent from './pomodoro.component';

export const PomodoroScene = {
  screen: SCENE_IDS.POMODORO,
  component: PomodoroComponent,
  navigatorStyle: {
    navBarHidden: true,
    statusBarColor: "#69D0E9FF",
    statusBarTextColorScheme: 'dark',
  },
};
