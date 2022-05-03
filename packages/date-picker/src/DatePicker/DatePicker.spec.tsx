import { act, fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DatePicker } from "./DatePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker",
  labelText: "Choose date",
  value: undefined,
  initialMonth: new Date(2022, 2),
  onChange: jest.fn(),
}

describe("<DatePicker />", () => {
  it("renders DatePicker and displays inital date within input", async () => {
    render(<DatePicker {...defaultProps} value={new Date(2022, 2, 1)} />)

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

  it("formats values when focus is on the input", async () => {
    render(<DatePicker {...defaultProps} value={new Date(2022, 2, 1)} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()

    const input = screen.getByRole("combobox")

    await act(async () => {
      input.focus()
    })
    expect(screen.getByDisplayValue("03/01/2022")).toBeInTheDocument()
  })

  it("formats values when the input loses focus - onBlur", async () => {
    render(<DatePicker {...defaultProps} value={new Date(2022, 2, 1)} />)

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()

    const input = screen.getByRole("combobox")

    await act(async () => {
      input.focus()
    })
    expect(screen.getByDisplayValue("03/01/2022")).toBeInTheDocument()

    // tab to next focusable element
    await act(async () => {
      userEvent.tab()
    })

    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("has disabled attribute on button", async () => {
    render(<DatePicker {...defaultProps} isDisabled />)

    const button = screen.getByRole("button")

    expect(button).toHaveAttribute("disabled")
  })
})
