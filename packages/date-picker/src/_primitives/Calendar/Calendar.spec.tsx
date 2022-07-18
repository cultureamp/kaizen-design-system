import React from "react"
import { render, screen } from "@testing-library/react"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { DayOfWeek } from "../../enums"
import { Calendar, CalendarProps } from "./Calendar"
import "@testing-library/jest-dom"

const defaultProps: CalendarProps = {
  mode: "single",
  id: "calendar-dialog",
  onDayChange: jest.fn<void, [Date]>(),
  weekStartsOn: DayOfWeek.Mon,
  locale: enUS,
}

const CalendarWrapper = (props: Partial<CalendarProps>) => (
  <Calendar {...defaultProps} {...props} />
)

describe("<Calendar />", () => {
  it("displays default month when provided", () => {
    render(<CalendarWrapper defaultMonth={new Date("2022-03-01")} />)

    expect(screen.getByText("March 2022")).toBeInTheDocument()
  })
  it("displays default month as value's month when provided", () => {
    render(<CalendarWrapper value={new Date("2022-03-01")} />)

    expect(screen.getByText("March 2022")).toBeInTheDocument()
  })

  it("displays default month as todays current month when provided", () => {
    render(<CalendarWrapper />)

    const today = new Date()
    const todayFormatted = format(today, "MMMM yyyy") // e.g June 2022
    expect(screen.getByText(todayFormatted)).toBeInTheDocument()
  })
})
