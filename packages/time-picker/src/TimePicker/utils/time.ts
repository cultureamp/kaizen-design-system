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
  date: Date | undefined | null
  typedInput?: string[]
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
  typedInput = [],
}: GetAllTimeOptionsConfig) => {
  const replaceNan = (aNum: string) => {
    if (!parseInt(aNum, 10)) {
      return ".."
    }
    return aNum
  }

  const matchRegex = new RegExp(
    `${replaceNan(typedInput[0])}${typedInput[1]}${replaceNan(typedInput[2])} ${
      typedInput[3]
    }`
  )
  return Array.from(Array(24).keys()).reduce((options, hour) => {
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

      if (typedInput.length == 0 || matchRegex.test(formattedTime)) {
        options[formattedTime] = {
          label: formattedTime,
          value: zonedDateTime,
        }
      }
    })
    return options
  }, {} as Record<string, TIME_OPTION>)
}
