import React from "react"
import { render } from "@testing-library/react"
import { Select, SelectProps } from "./Select"

const SelectWrapper = (customProps?: Partial<SelectProps>): JSX.Element => (
  <Select
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Select />", () => {
  it("does something", () => {
    render(<SelectWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
