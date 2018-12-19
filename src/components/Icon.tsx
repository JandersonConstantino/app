import * as React from 'react'
import { Svg } from 'expo'

type Props = {
  width: number
  height: number
  viewBox: string
}

export const Icon: React.SFC<Props> = ({
  width = 20,
  height = 20,
  viewBox = '0 0 1024 1024',
  children
}) => (
  <Svg width={width} height={height} viewBox={viewBox}>
    {children}
  </Svg>
)
