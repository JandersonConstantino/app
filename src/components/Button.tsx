import * as React from 'react'
import { styled, css } from '../constants/Theme'

type Size = 'large' | 'medium' | 'small'
type Color = 'primary' | 'secondary'

const large = css`
  width: 100%;
  padding: 10px 40px;
`

const medium = css`
  padding: 10px 30px;
`

const small = css`
  padding: 5px 20px;
`

const map = {
  large,
  medium,
  small
}

const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: ${props =>
    props.theme.combinations[props.color].background};

  ${(props: Props) => map[props.size]};
`

const ButtonText = styled.Text`
  font-family: 'roboto-regular';
  font-size: 11;
  text-align: center;
  color: ${props => props.theme.combinations[props.color].color};
`

type Props = {
  size: Size
  color: Color
  text: string
  onPress: () => void
}

export const Button: React.SFC<Props> = ({ color, text, size, onPress }) => (
  <ButtonWrapper color={color} size={size} onPress={onPress}>
    <ButtonText color={color}>{text.toUpperCase()}</ButtonText>
  </ButtonWrapper>
)
