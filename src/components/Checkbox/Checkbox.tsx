import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export type Option = {
  checked: boolean
  key: string
  label: string
}

type Props = {
  options: Option[]
}

type State = {
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
      <View>
        {checkboxes.map(({ key, label, checked }) => (
          <TouchableOpacity
            onPress={() => this.setChecked(key)} key={key}
            style={styles.touchable}
          >
            <Ionicons size={32} color='black'
              name={checked ? 'md-checkmark-circle' : 'md-radio-button-off'}
            />
            <Text style={styles.label}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
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