import React from "react"
import { render } from "@testing-library/react"
import { DateSegment, DateSegmentProps } from "./DateSegment"

const DateSegmentWrapper = (customProps?: Partial<DateSegmentProps>): JSX.Element => (
  <DateSegment
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<DateSegment />", () => {
  it("does something", () => {
    render(<DateSegmentWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
