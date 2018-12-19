import * as React from 'react'
import { View } from 'react-native'

import { Option } from './Option'

type Props = {
  onChange
  options
}

type State = {
  options
}

export class Checkbox extends React.Component<Props, State> {
  state: State = {
    options: this.props.options || []
  }

  private onChange = ({ value, selected }) => {
    this.setState(state => ({
      options: [{}]
    }))

    console.log(this.state.options)
  }

  render() {
    const { options } = this.props

    return (
      <View>
        {options.map(({ label, value, selected }) => (
          <Option
            key={value}
            onChange={this.onChange}
            label={label}
            value={value}
            selected={selected}
          />
        ))}
      </View>
    )
  }
}
