import * as React from 'react'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

import { fetchCoordinates } from '../actions/coordinates'
import { Coordinate } from '../reducers/coordinates'
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  map: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
})

interface State {
  coordinates: Coordinate
}

type Actions = {
  fetchCoordinates: () => void
  // recordCenter: (center) => void
}

interface Props extends State, Actions, React.HTMLAttributes<{}> {}

class LocationContainer extends React.Component<Props, State> {
  componentDidMount(): void {
    this.props.fetchCoordinates()
  }

  /**
   * @todo It's performatic?
   */
  recordCenter = (event): void => {
    const {
      center: [latitude, longitude],
      zoom
    } = event

    // this.props.recordCenter({ latitude, zoom, longitude })
  }

  render(): React.ReactNode {
    const { coordinates } = this.props

    if (!coordinates) {
      // return <Loader text="Carregando mapa" />
    }

    return (
      <MapView style={style.map} region={coordinates}>
        {this.props.children}
      </MapView>
    )
  }
}

const mapActionsToProps = (dispatch): Actions => ({
  fetchCoordinates: () => dispatch(fetchCoordinates())
  // recordCenter: center => dispatch(recordCenter(center))
})

const mapStateToProps = (state: State): State => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LocationContainer)
