import { ActionType } from '../ActionType'
import { Coordinates } from '../actions/coordinates'

export interface Coordinate extends Coordinates {
  latitudeDelta: number
  longitudeDelta: number
}

const initialState: Coordinate = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export const coordinates = (
  state: Coordinate = initialState,
  { payload, type }
): Coordinate => {
  switch (type) {
    case ActionType.LOCATION_FETCHED:
      const { latitude, longitude } = payload as Coordinates

      return {
        ...state,
        latitude,
        longitude
      }

    case ActionType.LOCATION_NOT_FETCHED:
      const message = payload as string

      return initialState

    default:
      return {
        ...state
      }
  }
}
