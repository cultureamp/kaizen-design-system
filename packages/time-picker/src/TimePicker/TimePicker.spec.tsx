import React from "react"
import { render } from "@testing-library/react"
import { TimePicker, TimePickerProps } from "./TimePicker"

const TimePickerWrapper = (
  customProps?: Partial<TimePickerProps>
): JSX.Element => <TimePicker locale="en-GB" {...customProps} />

describe("<TimePicker />", () => {
  it("does something", () => {
    render(<TimePickerWrapper />)
    /** @todo: Fill in test case */
    expect(true).toBe(false)
  })
})
