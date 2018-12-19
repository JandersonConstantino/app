import * as React from 'react'
import { TextInput } from 'react-native'

import { Subtitle } from '../shared/Subtitle'
import { Wrapper } from '../shared/Wrapper'
import { Title } from '../shared/Title'
import { Button } from '../../../components/Button'
import { styled } from '../../../constants/Theme'
import { Checkbox } from '../../../components/Checkbox'

const ConfirmButton = styled(Button)``

const modalities = [
  {
    label: 'Street',
    value: 'street',
    selected: false
  },
  {
    label: 'Longboard',
    value: 'longboard',
    selected: false
  }
]

export class Fillable extends React.Component {
  whenModalitiesSelected = () => {}

  render() {
    return (
      <Wrapper>
        <Title>Ei, adicione as informações do seu pico</Title>

        <TextInput placeholder="Nome do pico" />

        <Subtitle>
          Esse pico é sugerido pra qual modalidade? Selecione as categorias.
        </Subtitle>

        <Checkbox onChange={this.whenModalitiesSelected} options={modalities} />

        {/* <Checkbox id="street" text="Street" /> */}
        {/* <Checkbox id="longboard" text="Longboard" /> */}

        <Subtitle>É necessário pagar pra andar aí?, Marque uma opção.</Subtitle>

        {/* <Radio id="paid" name="cost" text="O acesso é pago" /> */}
        {/* <Radio id="free" name="cost" text="O acesso é gratuito" defaultChecked /> */}

        <ConfirmButton color="primary" size="large" text="Salvar esse local" />
      </Wrapper>
    )
  }
}
