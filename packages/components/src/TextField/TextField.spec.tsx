import React from "react"
import { render } from "@testing-library/react"
import { TextField, TextFieldProps } from "./TextField"

const TextFieldWrapper = (customProps?: Partial<TextFieldProps>): JSX.Element => (
  <TextField
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<TextField />", () => {
  it("does something", () => {
    render(<TextFieldWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
