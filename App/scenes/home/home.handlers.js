import { Navigation } from "react-native-navigation";
import { SCENE_IDS } from '../../navigation/scene-identifiers'
import { setTimer } from '../../store/timer/timer.actions'
import { getStore } from '../../store'

export const openPomodoro = () => {
  getStore().dispatch(setTimer())
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: SCENE_IDS.POMODORO,
          passProps: {
            text: 'stack with one child'
          },
          options: {
            topBar: {
              title: {
                text: 'Modal'
              }
            }
          }
        }
      }]
    }
  });
}
