import React from "react"
import { render, screen, within } from "@testing-library/react"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { CalendarSingle, CalendarSingleProps } from "../CalendarSingle"
import { setFocusInCalendar } from "./setFocusInCalendar"

const CalendarWrapper = (props: Partial<CalendarSingleProps>): JSX.Element => (
  <CalendarSingle
    id="calendar-dialog"
    onDayClick={jest.fn()}
    locale={enUS}
    onMount={calendarElement =>
      setFocusInCalendar(calendarElement, props.selected)
    }
    {...props}
  />
)

const today = new Date()
const todayMonth = format(today, "MMMM yyyy") // e.g "June 2023"
const todayDay = today.getDate().toString() // e.g "6"

describe("setFocusInCalendar", () => {
  it("should focus on today when no date is selected", () => {
    render(<CalendarWrapper />)

    const targetMonth = screen.getByRole("grid", { name: todayMonth })
    const targetDay = within(targetMonth).getByRole("gridcell", {
      name: todayDay,
    })
    expect(targetDay).toHaveFocus()
  })

  it("should focus on the selected day", () => {
    render(<CalendarWrapper selected={new Date("2022-08-15")} />)

    const targetMonth = screen.getByRole("grid", { name: "August 2022" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "15" })
    expect(targetDay).toHaveFocus()
  })

  it("should focus on today when selected date is invalid", () => {
    render(<CalendarWrapper selected={new Date("potato")} />)

    const targetMonth = screen.getByRole("grid", { name: todayMonth })
    const targetDay = within(targetMonth).getByRole("gridcell", {
      name: todayDay,
    })
    expect(targetDay).toHaveFocus()
  })

  it("should focus on the first of the month when there is no selected day nor in the current month", () => {
    render(<CalendarWrapper defaultMonth={new Date("2022-05-01")} />)

    const targetMonth = screen.getByRole("grid", { name: "May 2022" })
    const targetDay = within(targetMonth).getByRole("gridcell", { name: "1" })
    expect(targetDay).toHaveFocus()
  })
})
