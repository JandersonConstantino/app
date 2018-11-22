import * as React from 'react'
import { Icon } from '../Icon'
import { Svg } from 'expo'
import { Colors } from '../../constants/Colors'

type Props = {
  width?: number
  height?: number
  color: Colors
}

export const Plus: React.SFC<Props> = ({ width, height, color }) => (
  <Icon width={width} height={height}>
    <Svg.Path
      fill={color}
      d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
    />
  </Icon>
)
