import React from "react"
import { render } from "@testing-library/react"
import { DatePicker, DatePickerProps } from "./DatePicker"

const DatePickerWrapper = (
  customProps?: Partial<DatePickerProps>
): JSX.Element => (
  <DatePicker
    exampleRequiredString="Hello!" /** @todo: Add default values for your required props (override them with customProps if needed) */
    {...customProps}
  />
)

describe("<DatePicker />", () => {
  it("does something", () => {
    render(<DatePickerWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
