import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DateRangePicker } from "./DateRangePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker-range",
  labelText: "Choose date",
  initialMonth: new Date(2022, 2),
  onChange: () => jest.fn(),
}

describe("<DateRangePicker />", () => {
  it("renders DateRangePicker and shows/hides calendar on button press", async () => {
    render(<DateRangePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => element.click())
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("is able to select date range and shows in button", async () => {
    render(<DateRangePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    await act(async () => element.click())

    // Focus on 'from' date and select
    const selectedFromDate = screen.getByRole("gridcell", {
      name: "Sun Mar 06 2022",
    })
    await act(async () => {
      selectedFromDate.focus()
      userEvent.keyboard("{enter}")
    })
    // Focus on 'to' date and select
    const selectedToDate = screen.getByRole("gridcell", {
      name: "Wed Mar 16 2022",
    })
    await act(async () => {
      selectedToDate.focus()
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
