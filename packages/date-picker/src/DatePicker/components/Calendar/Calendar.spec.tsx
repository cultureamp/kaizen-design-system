import { render, screen } from "@testing-library/react"
import React from "react"
import { DayOfWeek } from "../../enums"
import { Calendar, CalendarProps } from "./Calendar"
import "@testing-library/jest-dom"

const defaultProps: CalendarProps = {
  mode: "single",
  id: "calendar-dialog",
  onDayChange: jest.fn<void, [Date]>(),
  weekStartsOn: DayOfWeek.Mon,
  setPopperElement: jest.fn(),
}

const CalendarWrapper = ({ ...restProps }: Partial<CalendarProps>) => (
  <Calendar {...defaultProps} {...restProps} />
)

describe("<Calendar />", () => {
  it("displays default month when provided", async () => {
    render(<CalendarWrapper defaultMonth={new Date("2022-03-01")} />)

    expect(screen.getByText("March 2022")).toBeInTheDocument()
  })
  it("displays default month as value's month when provided", async () => {
    render(<CalendarWrapper value={new Date("2022-03-01")} />)

    expect(screen.getByText("March 2022")).toBeInTheDocument()
  })

  it("displays default month as todays current month when provided", async () => {
    render(<CalendarWrapper />)

    expect(screen.getByText("June 2022")).toBeInTheDocument()
  })
})
