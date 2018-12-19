import * as React from 'react'
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

type Props = {
  onChange
  label
  value
  selected: boolean
}

type State = {
  selected: boolean
}

export class Option extends React.Component<Props, State> {
  public state = {
    selected: this.props.selected
  }

  private onChange = () => {
    this.setState(state => ({
      ...state,
      selected: !state.selected
    }))

    const { value, onChange } = this.props
    const { selected } = this.state

    onChange({
      value,
      selected
    })
  }

  public render() {
    const { label } = this.props
    return (
      <TouchableOpacity onPress={this.onChange}>
        <View>
          <Text>{label}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
