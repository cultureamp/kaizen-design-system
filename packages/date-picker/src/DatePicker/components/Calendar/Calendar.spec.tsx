import { render, screen } from "@testing-library/react"
import React from "react"
import format from "date-fns/format"
import { DayOfWeek } from "../../enums"
import { Calendar, CalendarProps } from "./Calendar"
import "@testing-library/jest-dom"

const defaultProps: CalendarProps = {
  mode: "single",
  id: "calendar-dialog",
  defaultMonth: new Date("2022-03-01"),
  value: new Date("2022-03-01"),
  onDayChange: jest.fn<void, [Date]>(),
  weekStartsOn: DayOfWeek.Mon,
  setPopperElement: jest.fn(),
  shouldFocusOnCalendar: true,
}

const CalendarWrapper = ({ ...restProps }: Partial<CalendarProps>) => (
  <Calendar {...defaultProps} {...restProps} />
)

describe("<Calendar />", () => {
  it("show focus on single selected day", async () => {
    render(<CalendarWrapper />)

    const selectedDate = screen.getByText("1st March (Tuesday)")

    expect(selectedDate.parentElement).toHaveFocus()
  })

  it("show focus on range from selected date", async () => {
    const selectedDateRange = {
      from: new Date("2022-03-01"),
      to: new Date("2022-03-15"),
    }
    render(<CalendarWrapper mode="range" selectedRange={selectedDateRange} />)

    const selectedDate = screen.getByText("1st March (Tuesday)")

    expect(selectedDate.parentElement).toHaveFocus()
  })

  it("show focus on today when no date is selected", () => {
    const today = new Date()
    const todayFormatted = format(today, "do LLLL (eeee)") // e.g 6th June (Monday)

    render(<CalendarWrapper defaultMonth={today} value={undefined} />)

    const dateToSelect = screen.getByText(todayFormatted).parentElement

    expect(dateToSelect).toHaveFocus()
  })

  it("does not focus within the calendar when shouldFocusOnCalendar is false", () => {
    render(<CalendarWrapper shouldFocusOnCalendar={false} />)

    expect(document.body).toHaveFocus()
  })
})
