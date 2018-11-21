import * as styledComponents from 'styled-components/native'
import { ThemedStyledComponentsModule } from 'styled-components/native'

import { Colors } from './Colors'

export type Color = 'primary' | 'secondary' | 'third' | 'fourth'

export type Theme = {
  colors: {
    primary: string
    secondary: string
    third: string
    fourth: string
  }
  combinations: {
    primary: {
      color: string
      background: string
    }
    secondary: {
      color: string
      background: string
    }
  }
}

const theme: Theme = {
  colors: {
    primary: Colors.PRIMARY,
    secondary: Colors.PRIMARY,
    third: Colors.THIRD,
    fourth: Colors.FOURTH
  },
  combinations: {
    primary: {
      color: Colors.PRIMARY,
      background: Colors.SECONDARY
    },
    secondary: {
      color: Colors.SECONDARY,
      background: Colors.PRIMARY
    }
  }
}

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { styled, css, keyframes, createGlobalStyle, ThemeProvider, theme }
