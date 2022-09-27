// import moment from "moment"

import {
  CalendarDateTime,
  DateFormatter,
  getLocalTimeZone,
  now,
  parseZonedDateTime,
  Time,
  ZonedDateTime,
} from "@internationalized/date"

export type TIME_OPTION = {
  label: string
  value: ZonedDateTime
}

type GetAllTimeOptionsConfig = {
  locale: string
  timeZone: string
  utcOffset: number
  increments?: number
  date?: Date
}

export const DATE_FORMATTER_CONFIG = {
  timeStyle: "short",
} as Intl.DateTimeFormatOptions

export const formatDateToTime = (date: Date, locale, timeZone): string =>
  new Intl.DateTimeFormat(locale, {
    ...DATE_FORMATTER_CONFIG,
    timeZone,
  }).format(date)

export const getAllTimeOptions = ({
  locale,
  timeZone,
  increments = 30,
  utcOffset,
  date,
}: GetAllTimeOptionsConfig) =>
  Array.from(Array(24).keys()).reduce((options, hour) => {
    // Generates an arbitrary date. Needs to take timezone
    const today = now(timeZone).toDate()
    Array.from(Array(60 / increments).keys()).forEach(increment => {
      // can't use new Time constructor, as that prevents proper visual time formatting
      const zonedDateTime = new ZonedDateTime(
        (date ?? today).getFullYear(),
        (date ?? today).getMonth(),
        (date ?? today).getDate(),
        timeZone,
        utcOffset,
        hour,
        increment * increments
      )
      const formattedTime = formatDateToTime(
        zonedDateTime.toDate(),
        locale,
        timeZone
      )

      options[formattedTime] = {
        label: formattedTime,
        value: zonedDateTime,
      }
    })
    return options
  }, {} as Record<string, TIME_OPTION>)
