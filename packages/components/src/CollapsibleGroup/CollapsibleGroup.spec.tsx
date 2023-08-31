import React from "react"
import { render } from "@testing-library/react"
import { CollapsibleGroup, CollapsibleGroupProps } from "./CollapsibleGroup"

const CollapsibleGroupWrapper = (customProps?: Partial<CollapsibleGroupProps>): JSX.Element => (
  <CollapsibleGroup
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<CollapsibleGroup />", () => {
  it("does something", () => {
    render(<CollapsibleGroupWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
