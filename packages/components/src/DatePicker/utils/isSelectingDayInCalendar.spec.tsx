import React from "react"
import { render, screen } from "@testing-library/react"
import { CalendarSingle } from "~components/Calendar"
import { isSelectingDayInCalendar } from "./isSelectingDayInCalendar"

describe("isSelectingDayInCalendar", () => {
  it("returns true when target is a Calendar day", () => {
    render(<CalendarSingle defaultMonth={new Date("2022-02-01")} />)
    const calendarDayElement = screen.getByRole("button", {
      name: "1st February (Tuesday)",
    })
    expect(isSelectingDayInCalendar(calendarDayElement)).toBe(true)
  })

  it("returns false when target is not a Calendar day", () => {
    render(<CalendarSingle defaultMonth={new Date("2022-02-01")} />)
    const notDayElement = screen.getByText("February 2022")
    expect(isSelectingDayInCalendar(notDayElement)).toBe(false)
  })
})
