import * as React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { styled } from '../constants/Theme'
import { Skateboarder } from '../components/Icons/Skateboarder'

const Header = styled.View`
  background-color: #000;
  height: 30;
`

const Body = styled.View``

const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #000;
  padding: 20px;
`

const Item = styled.TouchableWithoutFeedback``

const Description = styled.Text`
  font-size: 18;
`

export default class Menu extends React.Component {
  private navigate = (routeName: string) => {
    NavigationActions.navigate({ routeName })
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />

        <Header>
          <Text>Foo Header</Text>
        </Header>

        <Body>
          <Item onPress={this.navigate('List')}>
            <Content>
              <Skateboarder width={30} height={30} color="secondary" />
              <Description>Todos os picos</Description>
            </Content>
          </Item>
        </Body>
      </View>
    )
  }
}
