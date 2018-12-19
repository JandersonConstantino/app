import * as React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

import { List } from '../screens/Spot/List'
import { New } from '../screens/Spot/New'
import Login from '../screens/Login'
import Navigation from './Navigation'
import { Colors } from '../constants/Colors'
import { Menu } from '../components/Icons/Menu'
import { styled } from '../constants/Theme'

const MenuAtLeft = styled.TouchableHighlight`
  margin-left: 5;
`

const header = navigation => ({
  headerLeft: (
    <MenuAtLeft onPress={navigation.openDrawer}>
      <Menu width={28} height={28} color={Colors.PRIMARY} />
    </MenuAtLeft>
  ),
  headerMode: 'screen',
  headerTintColor: Colors.PRIMARY,
  headerStyle: {
    backgroundColor: Colors.SECONDARY
  }
})

const NewNavigator = createStackNavigator(
  {
    New
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Adicionar pico',
      ...header(navigation)
    })
  }
)

const ListNavigator = createStackNavigator(
  {
    List
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Picos',
      ...header(navigation)
    })
  }
)

export const Navigator = createDrawerNavigator(
  {
    List: ListNavigator,
    New: NewNavigator,
    Login
  },
  {
    initialRouteName: 'New',
    contentComponent: Navigation
  }
)
