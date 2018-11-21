import * as React from 'react'

import { theme, Color } from '../constants/Theme'
import { Svg } from 'expo'

type Props = {
  width: number
  height: number
}

export const Icon: React.SFC<Props> = ({
  width = 20,
  height = 20,
  children
}) => (
  <Svg width={width} height={height} viewBox="0 0 1024 1024">
    {children}
  </Svg>
)
