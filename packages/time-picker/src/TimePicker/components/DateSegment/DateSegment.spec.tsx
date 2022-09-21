import React from "react"
import { render } from "@testing-library/react"
import { DateSegment } from "./DateSegment"

const DateSegmentWrapper = (customProps): JSX.Element => (
  <DateSegment
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe.skip("<DateSegment />", () => {
  it("does something", () => {
    render(<DateSegmentWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
