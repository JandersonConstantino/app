import { styled } from '../../../constants/Theme'

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 1100;
  padding-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.primary};
  padding: 0 15px;
`
