import { CalendarDateTime, Time, ZonedDateTime } from "@internationalized/date"

export type TimeValue = Time | CalendarDateTime | ZonedDateTime
export type TimeOption = {
  label: string
  value: Time
}
