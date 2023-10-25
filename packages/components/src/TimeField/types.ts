import { CalendarDateTime, Time, ZonedDateTime } from "@internationalized/date"

export type TimeValue = Time | CalendarDateTime | ZonedDateTime
export type TimeOption = {
  label: string
  value: Time
}
export type StatusType = "default" | "error"

export type ValueType = {
  /**
   * Supply hour in 24 hour format
   */
  hour: number | undefined
  minutes: number | undefined
}

export type IncrementValues = 5 | 10 | 15 | 30 | 60
