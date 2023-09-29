import React from "react"
import { render } from "@testing-library/react"
import { Input, InputProps } from "./Input"

const InputWrapper = (customProps?: Partial<InputProps>): JSX.Element => (
  <Input
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Input />", () => {
  it("does something", () => {
    render(<InputWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
