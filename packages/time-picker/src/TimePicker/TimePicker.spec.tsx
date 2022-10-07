import React, { useState } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { TimePicker, TimePickerProps, ValueType } from "./TimePicker"

const mockSetValue = jest.fn()
const UTC_ZERO_TIMEZONE = "Africa/Abidjan"

const pressArrowKey =
  (direction: "ArrowUp" | "ArrowDown") => (element: HTMLElement) =>
    fireEvent.keyDown(element, {
      key: direction,
      code: direction,
    })

const TimePickerWrapper = ({
  value: propsValue,
  ...customProps
}: Partial<TimePickerProps>): JSX.Element => {
  const [value, setValue] = useState<undefined | ValueType | null>(propsValue)

  return (
    <TimePicker
      locale="en-GB"
      id="id"
      label="label"
      timeZone="Australia/Perth"
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
      /^12:00 am$/
    )
  })
  it("shows time in a h:mm A format for en-US", () => {
    render(<TimePickerWrapper locale="en-US" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu").firstChild).toHaveTextContent(
      /^12:00 AM$/
    )
  })
  it("shows time in a HH:MM format for en-GB", () => {
    render(<TimePickerWrapper locale="en-GB" />)
    // There should be 2 spin buttons - hour and minutes
    expect(screen.getAllByRole("spinbutton")).toHaveLength(2)
    fireEvent.click(screen.getByTestId("timepicker-input"))
    expect(screen.getByTestId("timepicker-menu").firstChild).toHaveTextContent(
      /^00:00$/
    )
  })
})

it("changes value when selecting a menu item", () => {
  render(<TimePickerWrapper />)
  fireEvent.click(screen.getByTestId("timepicker-input"))
  fireEvent.click(screen.getByText("01:30"))
  // FIXME: There should actually be a leading 0, i.e. 01
  expect(screen.getByRole("spinbutton", { name: "hour" })).toHaveTextContent(
    /^1$/
  )
  expect(screen.getByRole("spinbutton", { name: "minute" })).toHaveTextContent(
    /^30$/
  )
})

describe("spin button functionality", () => {
  it("changes hour on key press", () => {
    render(<TimePickerWrapper />)
    const hourSpinner = screen.getByRole("spinbutton", { name: "hour" })
    pressArrowKey("ArrowUp")(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^0$/)
    pressArrowKey("ArrowUp")(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^1$/)
    pressArrowKey("ArrowUp")(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^2$/)
    pressArrowKey("ArrowDown")(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^1$/)
  })
  it("changes minutes on key press", () => {
    render(<TimePickerWrapper />)
    const minuteSpinner = screen.getByRole("spinbutton", { name: "minute" })
    pressArrowKey("ArrowUp")(minuteSpinner)
    pressArrowKey("ArrowUp")(minuteSpinner)
    expect(minuteSpinner).toHaveTextContent(/^01$/)
    pressArrowKey("ArrowUp")(minuteSpinner)
    expect(minuteSpinner).toHaveTextContent(/^02$/)
    pressArrowKey("ArrowDown")(minuteSpinner)
    expect(minuteSpinner).toHaveTextContent(/^01$/)
  })

  it("changes segments orthogonally", () => {
    // tests whether changing minute changes hour
    render(
      <TimePickerWrapper
        value={{ hour: 4, minutes: 44 }}
        timeZone={UTC_ZERO_TIMEZONE}
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", { name: "hour" })
    const minuteSpinner = screen.getByRole("spinbutton", { name: "minute" })
    pressArrowKey("ArrowUp")(hourSpinner)
    pressArrowKey("ArrowDown")(minuteSpinner)
    expect(hourSpinner).toHaveTextContent(/^5$/)
    expect(minuteSpinner).toHaveTextContent(/^43$/)
  })
})

describe("onChange uses correct date", () => {
  it("uses the correct date when using menu items", () => {
    render(
      <TimePickerWrapper timeZone={UTC_ZERO_TIMEZONE} onChange={mockSetValue} />
    )
    fireEvent.click(screen.getByTestId("timepicker-button"))
    fireEvent.click(screen.getByText("01:30"))
    expect(mockSetValue).toHaveBeenCalledWith({ hour: 1, minutes: 30 })
  })
  it("uses the correct date when iteracting with spinner buttons", () => {
    render(
      <TimePickerWrapper
        value={{ hour: 4, minutes: 44 }}
        timeZone={UTC_ZERO_TIMEZONE}
        onChange={mockSetValue}
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", { name: "hour" })
    pressArrowKey("ArrowUp")(hourSpinner)
    expect(mockSetValue).toHaveBeenCalledWith({ hour: 5, minutes: 44 })
  })
})

it("shows timezone in label if not hiding timezone ", () => {
  render(<TimePickerWrapper hideTimeZone={false} locale="en-au" />)
  // TODO: How do we accurately write tests to reflect DST?
  expect(screen.getByTestId("timepicker-label")).toHaveTextContent("(AWST)")
})

it("allows uers to backspace to remove values", () => {
  render(
    <TimePickerWrapper
      value={{ hour: 4, minutes: 44 }}
      timeZone={UTC_ZERO_TIMEZONE}
    />
  )
  const hourSpinner = screen.getByRole("spinbutton", { name: "hour" })
  const minuteSpinner = screen.getByRole("spinbutton", { name: "minute" })
  fireEvent.keyDown(minuteSpinner, {
    key: "Backspace",
    code: "Backspace",
  })
  fireEvent.keyDown(minuteSpinner, {
    key: "Backspace",
    code: "Backspace",
  })
  expect(minuteSpinner).toHaveTextContent(/^––$/)
  expect(hourSpinner).toHaveTextContent(/^4$/)
})
