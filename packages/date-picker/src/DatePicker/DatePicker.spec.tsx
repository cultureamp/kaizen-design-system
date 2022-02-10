import { act, render, screen } from "@testing-library/react"
import React from "react"
import { DatePicker } from "./DatePicker"
import "@testing-library/jest-dom"

const defaultProps = {
  id: "date-picker",
  labelText: "Choose date",
  selectedDate: new Date(2022, 2, 1),
  onDayChange: () => jest.fn(),
}

describe("<DatePicker />", () => {
  it("should render DatePicker and hide/show calendar on focus", async () => {
    render(<DatePicker {...defaultProps} />)

    const element = screen.getByDisplayValue("Mar 1, 2022")
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    await act(async () => element.focus())
    expect(element).toHaveFocus()
    expect(screen.getByRole("dialog")).toBeVisible()
  })
})
