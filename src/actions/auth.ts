import { APP_ID, provider, signIn, User } from '../firebase'
import { Action } from 'redux'
import { ActionType } from '../ActionType'
import { Actionable } from '../Types'
import { Facebook } from 'expo'

export const doSignInAtProvider = () => {
  const whenSigned = async ({ token, type }: Facebook.Response) => {
    /**
     * @todo dispatch whenSignInError
     */
    if (type !== 'success') {
      console.log('error')
    }

    return await signIn(provider(token))
  }

  return async dispatch => {
    Facebook.logInWithReadPermissionsAsync(APP_ID)
      .then(async (response: Facebook.Response) =>
        dispatch(whenSignInSuccess(await whenSigned(response)))
      )

      /**
       * @todo dispatch whenSignInError
       */
      .catch(result => console.log(result))
  }
}

const whenSignInSuccess = (payload: User): Actionable<User> => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload
})

const whenSignInError = (): Action => ({
  type: ActionType.SIGN_IN_ERROR
})
