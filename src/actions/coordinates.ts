import { Permissions, Location } from 'expo'
import { Dispatch } from 'redux'

import { ActionType } from '../ActionType'
import { Actionable } from '../Types'

export type Coordinates = {
  latitude: number
  longitude: number
}

export type Location = Coordinates | string

export const fetchCoordinates = () => {
  const coordinate = new Promise(async (resolve, reject) => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      return reject('É preciso permissão para acessar sua localização')
    }

    let location: Location.LocationData = await Location.getCurrentPositionAsync(
      {}
    )

    return resolve({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
  })

  return (dispatch: Dispatch<Actionable<Location>>) => {
    coordinate
      .then((coordinates: Coordinates) =>
        dispatch(whenCoordinatesFetched(coordinates))
      )
      .catch((message: string) => dispatch(whenCoordinatesNotFetched(message)))
  }
}

const whenCoordinatesFetched = (
  payload: Coordinates
): Actionable<Coordinates> => ({
  type: ActionType.LOCATION_FETCHED,
  payload
})

const whenCoordinatesNotFetched = (payload: string): Actionable<string> => ({
  type: ActionType.LOCATION_NOT_FETCHED,
  payload
})
