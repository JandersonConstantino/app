import * as React from 'react'
import { View, Text, StatusBar } from 'react-native'
import {
  NavigationActions,
  DrawerActions,
  NavigationScreenProps
} from 'react-navigation'
import { styled } from '../constants/Theme'
import { Skateboarder } from '../components/Icons/Skateboarder'
import { Colors } from '../constants/Colors'
import { Plus } from '../components/Icons/Plus'

const Header = styled.View`
  background-color: ${Colors.SECONDARY};
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Photo = styled.Image`
  width: 70;
  height: 70;
  border-radius: ${70 / 2};
  background-color: ${Colors.PRIMARY};
  margin-bottom: 20px;
`

const Name = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${Colors.PRIMARY};
`

const Role = styled.Text`
  color: ${Colors.PRIMARY};
`

const Body = styled.View``

const Content = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  color: ${Colors.SECONDARY};
  padding: 20px;
`

const Item = styled.TouchableWithoutFeedback``

const Description = styled.Text`
  font-family: 'roboto-regular';
  font-size: 16px;
  margin-left: 10px;
`

type Props = NavigationScreenProps

export default class Navigation extends React.Component<Props> {
  private navigate = (routeName: string) => {
    const { navigation } = this.props
    navigation.navigate({ routeName })
    navigation.closeDrawer()
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />

        <Header>
          <Photo />
          <Name>Guilherme Bayer</Name>
          <Role>Skatista</Role>
        </Header>

        <Body>
          <Item onPress={() => this.navigate('List')}>
            <Content>
              <Skateboarder width={25} height={25} color={Colors.SECONDARY} />
              <Description>Todos os picos</Description>
            </Content>
          </Item>

          <Item onPress={() => this.navigate('New')}>
            <Content>
              <Plus width={35} height={35} color={Colors.SECONDARY} />
              <Description>Adicionar pico</Description>
            </Content>
          </Item>
        </Body>
      </View>
    )
  }
}
