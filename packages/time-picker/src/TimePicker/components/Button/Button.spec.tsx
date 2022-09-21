import React from "react"
import { render } from "@testing-library/react"
import { Button } from "./Button"

const ButtonWrapper = (customProps?): JSX.Element => (
  <Button
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe.skip("<Button />", () => {
  it("does something", () => {
    render(<ButtonWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
