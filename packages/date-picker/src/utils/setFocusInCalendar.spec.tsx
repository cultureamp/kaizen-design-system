import React from "react"
import { render, screen } from "@testing-library/react"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { CalendarSingle, CalendarSingleProps } from "../_subcomponents/Calendar"
import { setFocusInCalendar } from "./setFocusInCalendar"

const CalendarWrapper = (props: Partial<CalendarSingleProps>): JSX.Element => (
  <CalendarSingle
    id="calendar-dialog"
    onDayClick={jest.fn<[Date], void>()}
    locale={enUS}
    onMount={(calendarElement): void =>
      setFocusInCalendar(calendarElement, props.selected)
    }
    {...props}
  />
)

const today = new Date()
const todayFormatted = format(today, "do MMMM (eeee)") // e.g 6th June (Monday)

describe("setFocusInCalendar", () => {
  it("should focus on today when no date is selected", () => {
    render(<CalendarWrapper />)

    const dayToFocus = screen.getByRole("button", { name: todayFormatted })
    expect(dayToFocus).toHaveFocus()
  })

  it("should focus on the selected day", () => {
    render(<CalendarWrapper selected={new Date("2022-08-15")} />)

    const dayToFocus = screen.getByRole("button", {
      name: "15th August (Monday)",
    })
    expect(dayToFocus).toHaveFocus()
  })

  it("should focus on today when selected date is invalid", () => {
    render(<CalendarWrapper selected={new Date("potato")} />)

    const dayToFocus = screen.getByRole("button", { name: todayFormatted })
    expect(dayToFocus).toHaveFocus()
  })

  it("should focus on the first of the month when there is no selected day nor in the current month", () => {
    render(<CalendarWrapper defaultMonth={new Date("2022-05-01")} />)

    const dayToFocus = screen.getByRole("button", {
      name: "1st May (Sunday)",
    })
    expect(dayToFocus).toHaveFocus()
  })
})
