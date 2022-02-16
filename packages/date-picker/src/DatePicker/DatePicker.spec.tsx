import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DatePicker } from "./DatePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker",
  labelText: "Choose date",
  selectedDate: new Date(2022, 2, 1),
  initialMonth: new Date(2022, 2),
  onChange: () => jest.fn(),
}

describe("<DatePicker />", () => {
  it("renders DatePicker and shows/hides calendar on focus of input", async () => {
    render(<DatePicker {...defaultProps} />)

    const element = screen.getByDisplayValue("Mar 1, 2022")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Focus input and test calendar popup is showing
    await act(async () => element.focus())
    expect(element).toHaveFocus()
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("is able to select date and shows in input", async () => {
    render(<DatePicker {...defaultProps} />)

    const element = screen.getByDisplayValue("Mar 1, 2022")

    await act(async () => element.focus())

    // Focus on date and select
    const selectedDate = screen.getByRole("gridcell", {
      name: "Sun Mar 06 2022",
    })
    await act(async () => {
      selectedDate.focus()
      userEvent.keyboard("{enter}")
    })

    // Calendar closes on select and value shows in input
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(element.innerText === "Mar 6, 2022")
  })

  it("has disabled attribute on input", async () => {
    render(<DatePicker {...defaultProps} isDisabled />)

    const element = screen.getByDisplayValue("Mar 1, 2022")

    expect(element).toHaveAttribute("disabled")
  })
})
