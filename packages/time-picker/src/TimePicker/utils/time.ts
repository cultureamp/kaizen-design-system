// import moment from "moment"

import { now, ZonedDateTime } from "@internationalized/date"
import { convertTimeToZonedDateTime } from "./convertTimeToZonedDateTime"

export type TIME_OPTION = {
  label: string
  value: ZonedDateTime
}

type GetAllTimeOptionsConfig = {
  locale: string
  timeZone: string
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
  date,
}: GetAllTimeOptionsConfig) =>
  Array.from(Array(24).keys()).reduce((options, hour) => {
    // Generates an arbitrary date. Needs to take timezone
    const today = now(timeZone).toDate()
    Array.from(Array(60 / increments).keys()).forEach(increment => {
      // can't use new Time constructor, as that prevents proper visual time formatting
      const zonedDateTime = convertTimeToZonedDateTime({
        date: date ?? today,
        hour,
        minutes: increment * increments,
        timeZone,
      })
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
