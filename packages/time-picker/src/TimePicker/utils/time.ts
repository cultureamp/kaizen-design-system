import { Time } from "@internationalized/date"
import { ValueType } from "../"
import { TimeOption } from "../types"

// TODO split utils into their own files

type GetAllTimeOptionsConfig = {
  locale: string
  increments?: number
}

const DATE_FORMATTER_CONFIG = {
  timeStyle: "short",
} as Intl.DateTimeFormatOptions

export const generateLocalisedTime = ({
  hour,
  minutes,
  locale,
}: ValueType & { locale: string }): string => {
  // Generates an arbitrary date to pass into Intl.DateTimeFormat as it only accepts full dates
  const date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    hour,
    minutes
  )
  return new Intl.DateTimeFormat(locale, {
    ...DATE_FORMATTER_CONFIG,
  }).format(date)
}

export const getAllTimeOptions = ({
  locale,
  increments = 30,
}: GetAllTimeOptionsConfig): Record<string, TimeOption> =>
  Array.from(Array(24).keys()).reduce((options, hour) => {
    Array.from(Array(60 / increments).keys()).forEach(increment => {
      const minutes = increment * increments
      const time = new Time(hour, minutes)
      const formattedTime = generateLocalisedTime({ hour, minutes, locale })

      options[formattedTime] = {
        label: formattedTime,
        value: time,
      }
    })
    return options
  }, {} as Record<string, TimeOption>)
