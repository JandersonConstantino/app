import * as React from 'react'
import { TextInput as Inputable, Text } from 'react-native'
import { styled } from '../../constants/Theme'

const Input = styled(Inputable)`
  border: 1px solid #e8e8eb;
  border-radius: 4px;
  color: #414141;
  padding: 10px 10px;
`

const Label = styled(Text)`
  color: #8f9498;
  margin-bottom: 5px;
  font-size: 11px;
`

export const TextInput = ({ placeholder }) => (
  <React.Fragment>
    <Label>{placeholder}</Label>
    <Input placeholderTextColor="#e8e8eb" />
  </React.Fragment>
)
