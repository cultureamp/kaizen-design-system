import React from "react"
import { render } from "@testing-library/react"
import { FieldGroup, FieldGroupProps } from "./FieldGroup"

const FieldGroupWrapper = (customProps?: Partial<FieldGroupProps>): JSX.Element => (
  <FieldGroup
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<FieldGroup />", () => {
  it("does something", () => {
    render(<FieldGroupWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
