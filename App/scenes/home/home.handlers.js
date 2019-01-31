import { Navigation } from "react-native-navigation";
import { SCENE_IDS } from '../../navigation/scene-identifiers'

export const showName = () => {
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
