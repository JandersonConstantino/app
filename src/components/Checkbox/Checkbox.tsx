import * as React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

export type Option = {
  checked: boolean
  key: string
  label: string
}

export type Props = {
  options: Option[]
}

export type State = {
  checkboxes: Option[]
}

export class Checkbox extends React.Component<Props, State> {
  state = {
    checkboxes: this.props.options
  }

  setChecked = key => {
    const { checkboxes } = this.state
    const eqKey = i => i.key === key
    const index = checkboxes.findIndex(eqKey)

    checkboxes[index].checked = !checkboxes[index].checked

    this.setState(state => ({
      ...state,
      checkboxes
    }))
  }

  render() {
    const { checkboxes } = this.state

    return (
      <>
        {checkboxes.map(({ key, label, checked }) => (
          <TouchableOpacity onPress={() => this.setChecked(key)} key={key}>
            <Text>{checked ? '[X]' : '[ ]'}</Text>
            <Text>{label}</Text>
          </TouchableOpacity>
        ))}
      </>
    )
  }
}

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 10,
  }
})