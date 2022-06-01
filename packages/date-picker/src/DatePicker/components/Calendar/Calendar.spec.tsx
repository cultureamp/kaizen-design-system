import { render, screen } from "@testing-library/react"
import React from "react"
import { Calendar, CalendarProps } from "./Calendar"
import "@testing-library/jest-dom"

const defaultProps: CalendarProps = {
  mode: "single",
  id: "calendar-dialog",
  value: new Date("2022-03-01"),
  defaultMonth: new Date("2022-03-01"),
  onDayChange: jest.fn(),
  weekStartsOn: 1,
  setPopperElement: jest.fn(),
  styles: {},
  attributes: {},
}

describe("<Calendar />", () => {
  it("show focus on selected day", async () => {
    render(<Calendar {...defaultProps} />)

    const selectedDate = screen.getByText("1st March (Tuesday)")

    expect(selectedDate.parentElement).toHaveFocus()
  })
})
