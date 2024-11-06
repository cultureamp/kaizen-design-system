import React from "react"
import { render, screen } from "@testing-library/react"
import { format } from "date-fns"
import { CalendarRange } from "./CalendarRange"

describe("<CalendarRange />", () => {
  it("displays default month when provided", () => {
    render(<CalendarRange defaultMonth={new Date("2022-03-01")} />)
    expect(screen.getByText("March 2022")).toBeInTheDocument()
  })

  it("displays selected date's month when provided", () => {
    render(
      <CalendarRange
        selected={{
          from: new Date("2022-03-01"),
          to: new Date("2022-06-20"),
        }}
      />,
    )
    expect(screen.getByText("March 2022")).toBeInTheDocument()
  })

  it("displays current month when no default/selected month provided", () => {
    render(<CalendarRange />)
    const today = new Date()
    const todayFormatted = format(today, "MMMM yyyy") // e.g June 2022
    expect(screen.getByText(todayFormatted)).toBeInTheDocument()
  })

  it("displays current month when invalid month provided", () => {
    render(<CalendarRange defaultMonth={new Date("potato")} />)
    const today = new Date()
    const todayFormatted = format(today, "MMMM yyyy") // e.g June 2022
    expect(screen.getByText(todayFormatted)).toBeInTheDocument()
  })
})
