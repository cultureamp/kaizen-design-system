import { render, screen, cleanup } from "@testing-library/react"
import React from "react"
import { Calendar, CalendarProps } from "./Calendar"
import "@testing-library/jest-dom"

const defaultProps: CalendarProps = {
  value: new Date(2022, 2, 1),
  initialMonth: new Date(2022, 2),
  handleKeyDown: jest.fn(),
  handleOnDayChange: jest.fn(),
  firstDayOfWeek: 1,
  setPopperElement: jest.fn(),
  styles: {},
  attributes: {},
}

describe("<Calendar />", () => {
  it("show focus on selected day", async () => {
    render(<Calendar {...defaultProps} />)

    const selectedDate = screen.getByRole("gridcell", {
      name: "Tue Mar 01 2022",
    })

    expect(selectedDate).toHaveFocus()
  })
})
