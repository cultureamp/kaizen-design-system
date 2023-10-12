import React from "react"
import { render } from "@testing-library/react"
import { TextAreaField, TextAreaFieldProps } from "./TextAreaField"

const TextAreaFieldWrapper = (customProps?: Partial<TextAreaFieldProps>): JSX.Element => (
  <TextAreaField
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<TextAreaField />", () => {
  it("does something", () => {
    render(<TextAreaFieldWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
