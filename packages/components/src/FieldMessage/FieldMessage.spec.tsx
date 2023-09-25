import React from "react"
import { render } from "@testing-library/react"
import { FieldMessage, FieldMessageProps } from "./FieldMessage"

const FieldMessageWrapper = (customProps?: Partial<FieldMessageProps>): JSX.Element => (
  <FieldMessage
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<FieldMessage />", () => {
  it("does something", () => {
    render(<FieldMessageWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
