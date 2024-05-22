import React from "react"
import { render, screen, within } from "@testing-library/react"
import { CalendarSingle } from "../CalendarSingle"
import { isSelectingDayInCalendar } from "./isSelectingDayInCalendar"

describe("isSelectingDayInCalendar", () => {
  it("returns true when target is a Calendar day", () => {
    render(<CalendarSingle defaultMonth={new Date("2022-02-01")} />)
    const targetMonth = screen.getByRole("grid", { name: "February 2022" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "1" })
    expect(isSelectingDayInCalendar(targetDay)).toBe(true)
  })

  it("returns false when target is not a Calendar day", () => {
    render(<CalendarSingle defaultMonth={new Date("2022-02-01")} />)
    const notDayElement = screen.getByText("February 2022")
    expect(isSelectingDayInCalendar(notDayElement)).toBe(false)
  })
})
