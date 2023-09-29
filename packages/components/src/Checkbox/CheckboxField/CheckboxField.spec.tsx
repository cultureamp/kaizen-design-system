import React from "react"
import { render } from "@testing-library/react"
import { CheckboxField, CheckboxFieldProps } from "./CheckboxField"

const CheckboxFieldWrapper = (customProps?: Partial<CheckboxFieldProps>): JSX.Element => (
  <CheckboxField
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<CheckboxField />", () => {
  it("does something", () => {
    render(<CheckboxFieldWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
