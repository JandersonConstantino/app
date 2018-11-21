import * as React from 'react'
import { styled } from '../../constants/Theme'
import { View, Text } from 'react-native'
import LocationContainer from '../../containers/LocationContainer'

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`

const Content = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`

const Map = styled(LocationContainer)`
  flex: 1;
`

export class List extends React.Component {
  render(): React.ReactNode {
    return (
      <Content>
        <Map />
      </Content>
    )
  }
}
