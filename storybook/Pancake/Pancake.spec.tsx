import React from "react"
import { render } from "@testing-library/react"
import { Pancake, PancakeProps } from "./Pancake"

const PancakeWrapper = (customProps?: Partial<PancakeProps>): JSX.Element => (
  <Pancake
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<Pancake />", () => {
  it("does something", () => {
    render(<PancakeWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
