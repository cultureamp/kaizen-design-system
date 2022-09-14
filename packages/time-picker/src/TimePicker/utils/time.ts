// import moment from "moment"

import { Time } from "@internationalized/date"

export type TIME_OPTION = {
  label: string
  value: string
}

// FIXME: This is pretty ugly
const convert24To12HourTime = (time: Time) =>
  `${time.hour % 12 || 12}:${time.toString().split(":")[1]} ${
    time.hour >= 12 ? "PM" : "AM"
  }`

export const getAllTimeOptions = () =>
  Array.from(Array(24).keys()).reduce((options, hour) => {
    ;[0, 30].forEach(increment => {
      const time = new Time(hour, increment)
      options.push({
        value: time.toString(),
        label: convert24To12HourTime(time),
      })
    })
    return options
  }, [] as TIME_OPTION[])
