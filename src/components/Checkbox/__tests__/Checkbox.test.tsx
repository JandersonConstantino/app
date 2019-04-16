import * as React from "react"
import { shallow } from "enzyme"

import { Checkbox, Props, State } from "../Checkbox"

const props: Props = {
  options: [
    { checked: false, key: "1", label: "One" },
    { checked: false, key: "2", label: "Two" }
  ]
}

const checkbox = shallow<Props, State>(<Checkbox {...props} />)

describe("Checkbox", () => {
  it("renders correctly", () => {
    expect(checkbox).toMatchSnapshot()
  })
})