import React, { useState } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { TimePicker, TimePickerProps } from "./TimePicker"

const TimePickerWrapper = (
  customProps?: Partial<TimePickerProps>
): JSX.Element => {
  const [value, setValue] = useState<Date | undefined>(undefined)

  return (
    <TimePicker
      locale="en-GB"
      id="id"
      label="label"
      timeZone="Australia/Melbourne"
      value={value}
      onChange={setValue}
      {...customProps}
    />
  )
}

describe("the menu opens and closes properly", () => {
  it("opens the menu when the input is pressed", () => {
    render(<TimePickerWrapper />)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu")).toBeInTheDocument()
  })
  it("toggles the menu on button press", () => {
    render(<TimePickerWrapper />)
    fireEvent.click(screen.getByTestId("timepicker-button"))
    expect(screen.getByTestId("timepicker-menu")).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("timepicker-button"))
    expect(screen.queryByTestId("timepicker-menu")).toBeFalsy()
  })
  it("closes the menu on a menu item press", () => {
    render(<TimePickerWrapper />)
    fireEvent.click(screen.getByTestId("timepicker-button"))
    fireEvent.click(screen.getByText("00:00"))
    expect(screen.queryByTestId("timepicker-menu")).toBeFalsy()
  })
})

describe("component formats time appropriate to locale", () => {
  it("shows time in a h:mm a format for en-AU locale", () => {
    render(<TimePickerWrapper locale="en-AU" />)
    // There should be 3 spin buttons - hour, minutes, and period
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
    // There should be 2 spin buttons - hour and minutes
    expect(screen.getAllByRole("spinbutton")).toHaveLength(2)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu").firstChild).toHaveTextContent(
      "00:00"
    )
  })
})

it("changes value when selecting a menu item", () => {
  render(<TimePickerWrapper />)
  fireEvent.click(screen.getByTestId("timepicker-input"))
  fireEvent.click(screen.getByText("01:30"))
  // FIXME: There should actually be a leading 0, i.e. 01
  expect(screen.getAllByRole("spinbutton")[0].textContent).toEqual("1")
  expect(screen.getAllByRole("spinbutton")[1].textContent).toEqual("30")
})
