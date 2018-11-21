import { ActionType } from '../ActionType'
import { User } from '../firebase'

export type AuthState = {
  isAuthenticated: boolean
  email?: string
  uid?: string
  displayName?: string
  photoURL?: string
}

const initialState: AuthState = {
  isAuthenticated: false
}

export const auth = (
  state: AuthState = initialState,
  { type, payload }
): AuthState => {
  switch (type) {
    case ActionType.SIGN_IN_SUCCESS:
      const { user } = payload as User
      const { displayName, email, photoURL, uid } = user

      return {
        ...state,
        email,
        displayName,
        photoURL,
        uid,
        isAuthenticated: true
      }

    case ActionType.SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state
  }
}
