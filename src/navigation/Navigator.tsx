import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

import { List } from '../screens/Spot/List'
import Login from '../screens/Login'
import Menu from './Menu'
import { Colors } from '../constants/Colors'

const ListNavigator = createStackNavigator(
  {
    List
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Picos',
      headerTintColor: Colors.PRIMARY,
      headerStyle: {
        backgroundColor: Colors.SECONDARY
      }
    })
  }
)

export const Navigator = createDrawerNavigator(
  {
    List: ListNavigator,
    Login
  },
  {
    initialRouteName: 'List',
    contentComponent: Menu
  }
)
