import React, { useState } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { TimeField, TimeFieldProps } from "./TimeField"
import { ValueType } from "./types"

const mockOnChange = jest.fn()
const LABEL = "Launch Time Label"

const pressArrowKey =
  (direction: "ArrowUp" | "ArrowDown") =>
  (element: HTMLElement): void => {
    fireEvent.keyDown(element, {
      key: direction,
      code: direction,
    })
  }

const pressArrowUpKey: (element: HTMLElement) => void = pressArrowKey("ArrowUp")
const pressArrowDownKey: (element: HTMLElement) => void =
  pressArrowKey("ArrowDown")

const TimeFieldWrapper = ({
  value: propsValue = null,
  ...customProps
}: Partial<TimeFieldProps>): JSX.Element => {
  const [value, setValue] = useState<ValueType | null>(propsValue)

  return (
    <TimeField
      locale="en-GB"
      id="id"
      label={LABEL}
      value={value}
      onChange={setValue}
      {...customProps}
    />
  )
}

describe("component formats time appropriate to locale", () => {
  it("shows time in a h:mm a format for en-AU locale", () => {
    render(<TimeFieldWrapper locale="en-AU" />)
    // There should be 3 spin buttons - hour, minutes, and period
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
  })

  it("shows time in a h:mm A format for en-US", () => {
    render(<TimeFieldWrapper locale="en-US" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
  })

  it("shows time in a HH:MM format for en-GB", () => {
    render(<TimeFieldWrapper locale="en-GB" />)
    // There should be 2 spin buttons - hour and minutes
    expect(screen.getAllByRole("spinbutton")).toHaveLength(2)
  })
})

describe("spin button functionality", () => {
  it("changes hour on key press", () => {
    render(<TimeFieldWrapper />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
    pressArrowUpKey(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^0$/)

    pressArrowUpKey(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^1$/)

    pressArrowUpKey(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^2$/)

    pressArrowDownKey(hourSpinner)
    expect(hourSpinner).toHaveTextContent(/^1$/)
  })

  it("changes minutes on key press", () => {
    render(<TimeFieldWrapper />)
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} minute`,
    })
    pressArrowUpKey(minuteSpinner)
    pressArrowUpKey(minuteSpinner)
    expect(minuteSpinner).toHaveTextContent(/^01$/)

    pressArrowUpKey(minuteSpinner)
    expect(minuteSpinner).toHaveTextContent(/^02$/)

    pressArrowDownKey(minuteSpinner)
    expect(minuteSpinner).toHaveTextContent(/^01$/)
  })

  it("changes segments orthogonally", () => {
    // tests whether changing minute changes hour
    render(<TimeFieldWrapper value={{ hour: 4, minutes: 44 }} />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} minute`,
    })
    pressArrowUpKey(hourSpinner)
    pressArrowDownKey(minuteSpinner)
    expect(hourSpinner).toHaveTextContent(/^5$/)
    expect(minuteSpinner).toHaveTextContent(/^43$/)
  })

  it("allows uers to backspace to remove values", () => {
    render(<TimeFieldWrapper value={{ hour: 4, minutes: 44 }} />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
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
    expect(minuteSpinner).toHaveTextContent(/^--$/)
    expect(hourSpinner).toHaveTextContent(/^4$/)
  })
})

describe("onChange", () => {
  it("returns correct time from 12 hour format display", () => {
    render(
      <TimeFieldWrapper
        value={{ hour: 16, minutes: 44 }}
        onChange={mockOnChange}
        locale="en-AU"
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
    expect(hourSpinner).toHaveTextContent("4")

    pressArrowUpKey(hourSpinner)
    expect(mockOnChange).toHaveBeenCalledWith({ hour: 17, minutes: 44 })
  })

  it("returns correct time from 24 hour format display", () => {
    render(
      <TimeFieldWrapper
        value={{ hour: 16, minutes: 44 }}
        onChange={mockOnChange}
        locale="en-GB"
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `${LABEL} hour`,
    })
    expect(hourSpinner).toHaveTextContent("16")

    pressArrowUpKey(hourSpinner)
    expect(mockOnChange).toHaveBeenCalledWith({ hour: 17, minutes: 44 })
  })
})
