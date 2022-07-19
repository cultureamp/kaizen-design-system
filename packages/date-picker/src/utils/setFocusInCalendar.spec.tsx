import React from "react"
import { render, screen } from "@testing-library/react"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"
import { Calendar, CalendarProps } from "../_primitives/Calendar"
import { setFocusInCalendar } from "./setFocusInCalendar"

const CalendarWrapper = (props: Partial<CalendarProps>): JSX.Element => (
  <Calendar
    mode="single"
    id="calendar-dialog"
    onDayChange={jest.fn<void, [Date]>()}
    locale={enUS}
    onMount={calendarElement =>
      setFocusInCalendar(calendarElement, props.value)
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
    render(<CalendarWrapper value={new Date("2022-08-15")} />)

    const dayToFocus = screen.getByRole("button", {
      name: "15th August (Monday)",
    })
    expect(dayToFocus).toHaveFocus()
  })

  it("should focus on today when selected date is invalid", () => {
    render(<CalendarWrapper value={new Date("potato")} />)

    const dayToFocus = screen.getByRole("button", { name: todayFormatted })
    expect(dayToFocus).toHaveFocus()
  })
})
