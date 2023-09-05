import React from "react"
import { render } from "@testing-library/react"
import { Popover, PopoverProps } from "./Popover"

const PopoverWrapper = (customProps?: Partial<PopoverProps>): JSX.Element => (
  <Popover
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Popover />", () => {
  it("does something", () => {
    render(<PopoverWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
