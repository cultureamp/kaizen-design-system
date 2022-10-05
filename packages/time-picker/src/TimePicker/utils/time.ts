import { now, ZonedDateTime } from "@internationalized/date"
import { DateFieldState, DateSegment } from "@react-stately/datepicker"
import { convertTimeToZonedDateTime } from "./convertTimeToZonedDateTime"

export type TIME_OPTION = {
  label: string
  value: ZonedDateTime
}

type GetAllTimeOptionsConfig = {
  locale: string
  timeZone: string
  increments?: number
  date: DateFieldState | undefined | null
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

const isNumber = (aNum: string) => {
  if (!parseInt(aNum, 10)) {
    return false
  }
  return true
}

const getDateRegEx = (segments: DateSegment[] | undefined) => {
  let regex = ""
  if (segments) {
    segments.forEach(({ type, text }, index: number) => {
      if (
        type === "literal" &&
        index + 1 < segments.length &&
        isNumber(segments[index + 1].text)
      ) {
        regex += text
      } else if (type !== "literal" && isNumber(text)) {
        regex += text
      }
    })
  }
  return new RegExp(`${regex}.*`)
}

export const getAllTimeOptions = ({
  locale,
  timeZone,
  increments = 30,
  date,
}: GetAllTimeOptionsConfig) => {
  const matchRegex = getDateRegEx(date?.segments)
  return Array.from(Array(24).keys()).reduce((options, hour) => {
    // Generates an arbitrary date. Needs to take timezone
    const today = now(timeZone).toDate()
    Array.from(Array(60 / increments).keys()).forEach(increment => {
      // can't use new Time constructor, as that prevents proper visual time formatting
      const zonedDateTime = convertTimeToZonedDateTime({
        date: date?.value?.toDate(timeZone) ?? today,
        hour,
        minutes: increment * increments,
        timeZone,
      })
      const formattedTime = formatDateToTime(
        zonedDateTime.toDate(),
        locale,
        timeZone
      )

      if (matchRegex.test(formattedTime)) {
        options[formattedTime] = {
          label: formattedTime,
          value: zonedDateTime,
        }
      }
    })
    return options
  }, {} as Record<string, TIME_OPTION>)
}
