import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { TimePicker, TimePickerProps } from "./TimePicker"

const TimePickerWrapper = (
  customProps?: Partial<TimePickerProps>
): JSX.Element => (
  <TimePicker
    locale="en-GB"
    id="id"
    label="label"
    onChange={() => null}
    {...customProps}
  />
)

// describe("<TimePicker />", () => {
//   it("does something", () => {
//     render(<TimePickerWrapper />)
//     /** @todo: Fill in test case */
//     expect(true).toBe(false)
//   })
// })

it("shows the dropdown menu on input click", () => {
  render(<TimePickerWrapper />)
  fireEvent.click(screen.getByTestId("timepicker-input"))
  expect(screen.getByTestId("timepicker-menu")).toBeInTheDocument()
})

describe("component formats time appropriate to locale", () => {
  it("shows time in a h:mm a format for en-AU locale", () => {
    render(<TimePickerWrapper locale="en-AU" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu").firstChild).toHaveTextContent(
      "12:00 am"
    )
  })
  it("shows time in a h:mm A format for en-US", () => {
    render(<TimePickerWrapper locale="en-US" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu").firstChild).toHaveTextContent(
      "12:00 AM"
    )
  })
  it("shows time in a HH:MM format for en-GB", () => {
    render(<TimePickerWrapper locale="en-GB" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(2)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu").firstChild).toHaveTextContent(
      "00:00"
    )
  })
})
