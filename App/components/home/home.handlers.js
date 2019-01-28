import { Navigation } from "react-native-navigation";

export const showName = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'pomo',
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