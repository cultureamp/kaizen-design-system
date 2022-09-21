import React from "react"
import { render } from "@testing-library/react"
import { MenuItem } from "./MenuItem"

const MenuItemWrapper = (customProps): JSX.Element => (
  <MenuItem
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe.skip("<MenuItem />", () => {
  it("does something", () => {
    render(<MenuItemWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
