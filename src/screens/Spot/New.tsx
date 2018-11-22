import * as React from 'react'
import { styled } from '../../constants/Theme'
import LocationContainer from '../../containers/LocationContainer'
import { Pointer } from '../../components/Icons/Pointer'
import { Colors } from '../../constants/Colors'
import { StyleSheet } from 'react-native'
import { Button } from '../../components/Button'

const Content = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`

const Map = styled(LocationContainer)`
  flex: 1;
`

const Centerable = styled.View({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  paddingLeft: 25,
  paddingRight: 25
})

const PointerAtCenter = styled(Pointer)`
  left: 50%;
  top: 50%;
  z-index: 500;
  margin-top: -55;
  margin-left: -27;
  position: absolute;
`

const ConfirmCoordinate = styled(Button)`
  position: absolute;
  top: 40px;
`

export class New extends React.Component {
  render(): React.ReactNode {
    return (
      <Content>
        <Map />

        <Centerable pointerEvents="none">
          <PointerAtCenter width={55} height={55} color={Colors.SECONDARY} />

          <ConfirmCoordinate
            color="primary"
            size="large"
            text="Confirmar posição"
            onPress={() => console.log('oi')}
          />
        </Centerable>
      </Content>
    )
  }
}
