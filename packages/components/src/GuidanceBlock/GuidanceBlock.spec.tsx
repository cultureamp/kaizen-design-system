import React from "react"
import { render } from "@testing-library/react"
import { GuidanceBlock, GuidanceBlockProps } from "./GuidanceBlock"

const GuidanceBlockWrapper = (
  customProps?: Partial<GuidanceBlockProps>
): JSX.Element => (
  <GuidanceBlock
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<GuidanceBlock />", () => {
  it("does something", () => {
    render(<GuidanceBlockWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
