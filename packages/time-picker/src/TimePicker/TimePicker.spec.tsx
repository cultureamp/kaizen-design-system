import React, { useState } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { TimePicker, TimePickerProps } from "./TimePicker"
import { ValueType } from "./types"

const mockOnChange = jest.fn()
const LABEL = "Launch Time Label"
const DROPDOWN_ARIA_LABEL = "Toggle dropdown button"

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
      label={LABEL}
      dropdownButtonAriaLabel={DROPDOWN_ARIA_LABEL}
      value={value}
      onChange={setValue}
      {...customProps}
    />
  )
}

describe("the menu opens and closes properly", () => {
  it("opens the menu when the input is pressed", () => {
    render(<TimePickerWrapper />)
    fireEvent.click(screen.getByRole("group", { name: LABEL }))
    expect(screen.getByText("00:00")).toBeInTheDocument()
  })
  it("toggles the menu on button press", () => {
    render(<TimePickerWrapper />)
    fireEvent.click(screen.getByRole("button", { name: DROPDOWN_ARIA_LABEL }))
    expect(screen.getByText("00:00")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: DROPDOWN_ARIA_LABEL }))
    expect(screen.queryByText("00:00")).toBeFalsy()
  })
  it("closes the menu on a menu item press", () => {
    render(<TimePickerWrapper />)
    fireEvent.click(screen.getByRole("button", { name: DROPDOWN_ARIA_LABEL }))
    fireEvent.click(screen.getByText("00:00"))
    expect(screen.queryByText("00:00")).toBeFalsy()
  })
})

describe("component formats time appropriate to locale", () => {
  it("shows time in a h:mm a format for en-AU locale", () => {
    render(<TimePickerWrapper locale="en-AU" />)
    // There should be 3 spin buttons - hour, minutes, and period
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
    fireEvent.click(screen.getByRole("group", { name: LABEL }))
    expect(screen.getByText("12:00 am")).toBeInTheDocument()
  })
  it("shows time in a h:mm A format for en-US", () => {
    render(<TimePickerWrapper locale="en-US" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
    fireEvent.click(screen.getByRole("group", { name: LABEL }))
    expect(screen.getByText("12:00 AM")).toBeInTheDocument()
  })
  it("shows time in a HH:MM format for en-GB", () => {
    render(<TimePickerWrapper locale="en-GB" />)
    // There should be 2 spin buttons - hour and minutes
    expect(screen.getAllByRole("spinbutton")).toHaveLength(2)
    fireEvent.click(screen.getByRole("group", { name: LABEL }))
    expect(screen.getByText("00:00")).toBeInTheDocument()
  })
})

it("changes value when selecting a menu item", () => {
  render(<TimePickerWrapper />)
  fireEvent.click(screen.getByRole("group", { name: LABEL }))
  fireEvent.click(screen.getByText("01:30"))
  // FIXME: There should actually be a leading 0, i.e. 01
  expect(
    screen.getByRole("spinbutton", { name: `${LABEL} hour` })
  ).toHaveTextContent(/^1$/)
  expect(
    screen.getByRole("spinbutton", { name: `${LABEL} minute` })
  ).toHaveTextContent(/^30$/)
})

describe("spin button functionality", () => {
  it("changes hour on key press", () => {
    render(<TimePickerWrapper />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
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
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} minute`,
    })
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
    render(<TimePickerWrapper value={{ hour: 4, minutes: 44 }} />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} minute`,
    })
    pressArrowKey("ArrowUp")(hourSpinner)
    pressArrowKey("ArrowDown")(minuteSpinner)
    expect(hourSpinner).toHaveTextContent(/^5$/)
    expect(minuteSpinner).toHaveTextContent(/^43$/)
  })
})

describe("onChange uses correct date", () => {
  it("uses the correct date when using menu items", () => {
    render(<TimePickerWrapper onChange={mockOnChange} />)
    fireEvent.click(screen.getByRole("button", { name: DROPDOWN_ARIA_LABEL }))
    fireEvent.click(screen.getByText("01:30"))
    expect(mockOnChange).toHaveBeenCalledWith({ hour: 1, minutes: 30 })
  })
  it("uses the correct date when iteracting with spinner buttons", () => {
    render(
      <TimePickerWrapper
        value={{ hour: 4, minutes: 44 }}
        onChange={mockOnChange}
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
    pressArrowKey("ArrowUp")(hourSpinner)
    expect(mockOnChange).toHaveBeenCalledWith({ hour: 5, minutes: 44 })
  })
})

it("allows uers to backspace to remove values", () => {
  render(<TimePickerWrapper value={{ hour: 4, minutes: 44 }} />)
  const hourSpinner = screen.getByRole("spinbutton", { name: `${LABEL} hour` })
  const minuteSpinner = screen.getByRole("spinbutton", {
    name: `${LABEL} minute`,
  })
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
