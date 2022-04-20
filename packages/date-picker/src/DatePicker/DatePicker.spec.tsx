import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { DatePicker } from "./DatePicker"
import "@testing-library/jest-dom"

const validationMessages = {
  success: "This is a success message",
  caution: "This is a cautionary message",
  error: "This is an error message",
}

const defaultProps = {
  id: "date-picker",
  labelText: "Choose date",
  valueDate: new Date(2022, 2, 1),
  initialMonth: new Date(2022, 2),
  onChange: () => jest.fn(),
  validationMessages,
  setValueDate: () => jest.fn(),
}

describe("<DatePicker />", () => {
  it("renders DatePicker and shows/hides calendar on button press", async () => {
    render(<DatePicker {...defaultProps} />)

    // Make sure date renders in the button
    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()

    const element = screen.getByRole("button")

    // Make sure calendar popup is not in the DOM
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

    // Click button and test calendar popup is showing
    await act(async () => element.click())
    expect(screen.getByRole("dialog")).toBeVisible()
  })

  it("is able to select date and shows in button", async () => {
    render(<DatePicker {...defaultProps} />)

    const element = screen.getByRole("button")

    await act(async () => element.click())

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

  it("has disabled attribute on button", async () => {
    render(<DatePicker {...defaultProps} isDisabled />)

    const element = screen.getByRole("button")

    expect(element).toHaveAttribute("disabled")
  })
})
