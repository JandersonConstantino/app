import * as React from 'react'
import { connect } from 'react-redux'
import { Video } from 'expo'
import { StyleSheet } from 'react-native'

import { styled } from '../constants/Theme'
import Layout from '../constants/Layout'
import { Button } from '../components/Button'
import { doSignInAtProvider } from '../actions/auth'
import { AuthState } from '../reducers/auth'
import { NavigationScreenProp } from 'react-navigation'

const background = require('../assets/images/background.mp4')
const logo = require('../assets/images/logo.png')

const Background = styled(Video)`
  width: ${props => props.width};
  height: ${props => props.height};
`

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`

const Logo = styled.Image`
  margin-bottom: 140;
`

const Content = styled.View({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  paddingLeft: 25,
  paddingRight: 25
})

type Actions = {
  doSignInAtProvider: () => void
}

interface Props extends Actions {
  auth: AuthState
  navigation: NavigationScreenProp<State>
}

type State = {
  video: {
    width: number
    height: number
  }
}

class Login extends React.Component<Props, State> {
  state = {
    video: {
      width: Layout.window.width,
      height: Layout.window.height
    }
  }

  componentDidMount() {
    const { auth, navigation } = this.props

    if (auth.isAuthenticated) {
      navigation.navigate({ routeName: 'List' })
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { auth, navigation } = this.props

    if (auth.isAuthenticated && !prevProps.auth.isAuthenticated) {
      navigation.navigate({ routeName: 'List' })
    }
  }

  render(): React.ReactNode {
    const { video } = this.state
    const { doSignInAtProvider } = this.props

    return (
      <Container>
        <Background
          isLooping
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          source={background}
          width={video.width}
          height={video.height}
        />

        <Content>
          <Logo source={logo} />

          <Button
            color="secondary"
            size="large"
            text="Entrar com Facebook"
            onPress={doSignInAtProvider}
          />
        </Content>
      </Container>
    )
  }
}

const mapActionsToProps = (dispatch): Actions => ({
  doSignInAtProvider: () => dispatch(doSignInAtProvider())
})

const mapStateToProps = (state: State) => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login)
