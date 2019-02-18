import * as React from 'react'

import { TextInput } from '../../../components/TextInput'
import { Subtitle } from '../shared/Subtitle'
import { Wrapper } from '../shared/Wrapper'
import { Title } from '../shared/Title'
import { Button } from '../../../components/Button'
import { styled } from '../../../constants/Theme'
import { Checkbox, Option } from '../../../components/Checkbox'

const Submit = styled(Button)``

const modalities: Option[] = [
  {
    label: 'Street',
    key: 'street',
    checked: false
  },
  {
    label: 'Longboard',
    key: 'longboard',
    checked: false
  }
]

export class Fillable extends React.Component {
  state = {
    options: [
      {
        key: 'street',
        text: 'Street',
        checked: false
      },
      {
        key: 'longboard',
        text: 'Longboard',
        checked: false
      }
    ]
  }

  render() {
    return (
      <Wrapper>
        <Title>Ei, adicione as informações do seu pico</Title>

        <TextInput placeholder="Nome do pico" />

        <Subtitle>
          Esse pico é sugerido pra qual modalidade? Selecione as categorias.
        </Subtitle>

        <Checkbox options={modalities} />

        <Subtitle>É necessário pagar pra andar aí?, Marque uma opção.</Subtitle>

        {/* <Radio id="paid" name="cost" text="O acesso é pago" /> */}
        {/* <Radio id="free" name="cost" text="O acesso é gratuito" defaultChecked /> */}

        <Submit color="primary" size="large" text="Salvar esse local" />
      </Wrapper>
    )
  }
}
