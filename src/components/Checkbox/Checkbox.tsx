import React, { Fragment } from 'react'

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
      <Fragment>
        {checkboxes.map(({ key, label, checked }) => (
          <div onClick={() => this.setChecked(key)} key={key}>
            <span>{checked ? '[X]' : '[ ]'}</span>
            <p>{label}</p>
          </div>
        ))}
      </Fragment>
    )
  }
}
