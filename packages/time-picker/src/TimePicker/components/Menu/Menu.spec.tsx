import React from "react"
import { render } from "@testing-library/react"
import { Menu } from "./Menu"

const MenuWrapper = (customProps): JSX.Element => (
  <Menu
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe.skip("<Menu />", () => {
  it("does something", () => {
    render(<MenuWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
