import { combineReducers, Reducer } from 'redux'

import { auth, AuthState } from './auth'
import { coordinates, Coordinate } from './coordinates'

export interface ApplicationState {
  auth: AuthState
  coordinates: Coordinate
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth,
  coordinates
})

export default reducers
