import * as firebase from 'firebase'

const options = {
  apiKey: 'AIzaSyAaSHbdruM1DnyZ1k4QLAlOs_Ho-rAVxUc',
  authDomain: 'ondetempico.firebaseapp.com',
  databaseURL: 'https://ondetempico.firebaseio.com',
  storageBucket: 'ondetempico.appspot.com'
}

export const APP_ID = '748901458621446'

export const firebaseApp: firebase.app.App = firebase.initializeApp(options)

export const databaseRef: firebase.database.Database = firebaseApp.database()

export const authRef: firebase.auth.Auth = firebaseApp.auth()

export type User = firebase.auth.UserCredential

export const provider = (token: string): firebase.auth.AuthCredential =>
  firebase.auth.FacebookAuthProvider.credential(token)

export const signIn = (credential: firebase.auth.AuthCredential) =>
  authRef.signInAndRetrieveDataWithCredential(credential)
