import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DateRangePicker } from "./DateRangePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker-range",
  labelText: "Choose date",
  defaultMonth: new Date("2022-03-01"),
  onChange: jest.fn(),
}

describe("<DateRangePicker />", () => {
  it("renders DateRangePicker and shows/hides calendar on button press", async () => {
    render(<DateRangePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => element.click())

    expect(screen.queryByRole("dialog")).toBeInTheDocument()
  })

  it("is able to select date range and shows in button", async () => {
    jest.setTimeout(10000)
    render(<DateRangePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    await act(async () => element.click())

    // Focus on 'from' date and select
    const selectedFromDate = screen.getByText("6th March (Sunday)")

    await act(async () => {
      selectedFromDate.parentElement && selectedFromDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

    // Focus on 'to' date and select
    const selectedToDate = screen.getByText("16th March (Wednesday)")

    await act(async () => {
      selectedToDate.parentElement && selectedToDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })
    expect(element.innerText === "Mar 6 – Mar 16, 2022")
  })

  it("has disabled attribute on button", async () => {
    render(<DateRangePicker {...defaultProps} isDisabled />)

    const element = screen.getByRole("button")

    expect(element).toHaveAttribute("disabled")
  })
})
