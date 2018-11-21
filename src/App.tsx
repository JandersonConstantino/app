import * as React from 'react'
import { AppLoading, Asset, Font } from 'expo'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Navigator } from './navigation/Navigator'

import { ThemeProvider, theme } from './constants/Theme'
import { store, persistedStore } from './store'

type Props = {}

type State = {
  wasLoaded: boolean
}

export default class App extends React.Component<Props, State> {
  state: State = {
    wasLoaded: false
  }

  private loadAsyncResources = (): Promise<any> => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/background.mp4'),
        require('./assets/images/logo.png')
      ]),
      Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf')
      })
    ])
  }

  private resourcesWasLoaded = () => {
    this.setState({ wasLoaded: true })
  }

  render(): React.ReactNode {
    if (!this.state.wasLoaded) {
      return (
        <AppLoading
          startAsync={this.loadAsyncResources}
          onFinish={this.resourcesWasLoaded}
        />
      )
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <ThemeProvider theme={theme}>
            <Navigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}
