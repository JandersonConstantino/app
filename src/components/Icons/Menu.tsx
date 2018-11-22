import * as React from 'react'
import { Icon } from '../Icon'
import { Svg } from 'expo'
import { Colors } from '../../constants/Colors'

type Props = {
  width?: number
  height?: number
  color: Colors
}

export const Menu: React.SFC<Props> = ({ width, height, color }) => (
  <Icon width={width} height={height}>
    <Svg.Path
      fill={color}
      d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
    />
  </Icon>
)
