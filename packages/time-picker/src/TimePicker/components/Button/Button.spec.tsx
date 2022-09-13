import React from "react"
import { render } from "@testing-library/react"
import { Button, ButtonProps } from "./Button"

const ButtonWrapper = (customProps?: Partial<ButtonProps>): JSX.Element => (
  <Button
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Button />", () => {
  it("does something", () => {
    render(<ButtonWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
