import React from "react"
import { render } from "@testing-library/react"
import { RadioField, RadioFieldProps } from "./RadioField"

const RadioFieldWrapper = (customProps?: Partial<RadioFieldProps>): JSX.Element => (
  <RadioField
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<RadioField />", () => {
  it("does something", () => {
    render(<RadioFieldWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
