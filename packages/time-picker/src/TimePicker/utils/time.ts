// import moment from "moment"

import {
  CalendarDateTime,
  DateFormatter,
  getLocalTimeZone,
  Time,
} from "@internationalized/date"

export type TIME_OPTION = {
  label: string
  value: CalendarDateTime
}

type GetAllTimeOptionsConfig = {
  locale: string
  timeZone?: string
  increments?: number
}
export const getAllTimeOptions = ({
  locale,
  timeZone = getLocalTimeZone(),
  increments = 30,
}: GetAllTimeOptionsConfig) =>
  Array.from(Array(24).keys()).reduce((options, hour) => {
    // Generates an arbitrary date
    const today = new Date()
    Array.from(Array(60 / increments).keys()).forEach(increment => {
      const calendarDateTime = new CalendarDateTime(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        hour,
        increment * increments
      )
      const formattedTime = new DateFormatter(locale, {
        timeStyle: "short",
      }).format(calendarDateTime.toDate(timeZone))

      options[formattedTime] = {
        label: formattedTime,
        value: calendarDateTime,
      }
    })
    return options
  }, {} as Record<string, TIME_OPTION>)
