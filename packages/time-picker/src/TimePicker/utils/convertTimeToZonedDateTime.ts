import { now, ZonedDateTime } from "@internationalized/date"

export const convertTimeToZonedDateTime = ({
  date,
  hour,
  minutes,
  timeZone,
}: {
  date?: Date
  hour: number
  minutes: number
  timeZone: string
}): ZonedDateTime => {
  // using this instead of new Date().getTimezoneOffset as ZonedDateTime constructor measures offset different
  const today = now(timeZone)
  const todayDate = today.toDate()
  return new ZonedDateTime(
    (date ?? todayDate).getFullYear(),
    (date ?? todayDate).getMonth() + 1,
    (date ?? todayDate).getDate(),
    timeZone,
    today.offset,
    hour,
    minutes
  )
}
