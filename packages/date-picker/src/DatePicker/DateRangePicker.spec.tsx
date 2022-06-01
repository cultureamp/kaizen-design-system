import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "react-day-picker"
import { DateRangePicker } from "./DateRangePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker-range",
  labelText: "Choose date",
  defaultMonth: new Date("2022-03-01"),
  onChange: jest.fn<void, [DateRange]>(),
}

describe("<DateRangePicker />", () => {
  it("renders DateRangePicker and shows/hides calendar on button press", async () => {
    render(<DateRangePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    await act(async () => element.click())

    expect(screen.queryByRole("dialog")).toBeInTheDocument()
  })

  it("is able to select date range and shows in button", async () => {
    jest.setTimeout(10000)
    render(<DateRangePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    await act(async () => element.click())

    const selectedFromDate = screen.getByText("6th March (Sunday)")

    await act(async () => {
      selectedFromDate.parentElement && selectedFromDate.parentElement.focus()
      userEvent.keyboard("{enter}")
    })

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
