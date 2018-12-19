import * as React from 'react'
import { styled } from '../../constants/Theme'
import LocationContainer from '../../containers/LocationContainer'
import { Pointer } from '../../components/Icons/Pointer'
import { Button } from '../../components/Button'
import { Colors } from '../../constants/Colors'
import { Fillable } from './New/Fillable'

const Content = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Map = styled(LocationContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PointerAtCenter = styled.View`
  position: absolute;
`

const ConfirmCoordinate = styled.View`
  position: absolute;
  bottom: 80px;
`

export class New extends React.Component {
  state = {
    isFillableShowable: false,
    isRecordSpotImagesVisible: false,
    isSpotRecorded: false
  }

  fillSpotData = () => {
    this.setState({
      isFillableShowable: true
    })
  }

  render(): React.ReactNode {
    return (
      <Content>
        <Map />

        <Fillable />

        <PointerAtCenter>
          <Pointer width={55} height={55} color={Colors.SECONDARY} />
        </PointerAtCenter>

        <ConfirmCoordinate>
          <Button
            color="primary"
            size="large"
            text="Confirmar posição"
            onPress={this.fillSpotData}
          />
        </ConfirmCoordinate>
      </Content>
    )
  }
}
