import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DatePicker } from "./DatePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker",
  labelText: "Choose date",
  selectedDay: undefined,
  initialMonth: new Date(2022, 2),
  onDayChange: jest.fn(),
  description: "Format: mm/dd/yyyy",
}

describe("<DatePicker />", () => {
  it("renders DatePicker and displays inital date within input", async () => {
    render(<DatePicker {...defaultProps} selectedDay={new Date(2022, 2, 1)} />)

    // Make sure date renders in the button
    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("renders DatePicker and shows/hides calendar on button press", async () => {
    render(<DatePicker {...defaultProps} />)

    const button = screen.getByRole("button")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => button.click())
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("renders DatePicker and shows/hides calendar on arrow down keydown", async () => {
    render(<DatePicker {...defaultProps} />)

    const input = screen.getByRole("combobox")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => {
      input.focus()
      userEvent.keyboard("{arrowdown}")
    })
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("is able to select date and shows in input", async () => {
    render(<DatePicker {...defaultProps} />)

    const button = screen.getByRole("button")

    await act(async () => button.click())

    // Focus on date and select
    const selectedDate = screen.getByRole("gridcell", {
      name: "Sun Mar 06 2022",
    })
    await act(async () => {
      selectedDate.focus()
      userEvent.keyboard("{enter}")
    })
  })

  it("returns focus to the button once date has been selected", async () => {
    render(<DatePicker {...defaultProps} />)

    const button = screen.getByRole("button")

    await act(async () => button.click())

    // Focus on date and select
    const selectedDate = screen.getByRole("gridcell", {
      name: "Sun Mar 06 2022",
    })
    await act(async () => {
      selectedDate.focus()
      userEvent.keyboard("{enter}")
    })

    expect(button).toHaveFocus()
  })

  it("has disabled attribute on button", async () => {
    render(<DatePicker {...defaultProps} isDisabled />)

    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("disabled")
  })
})
