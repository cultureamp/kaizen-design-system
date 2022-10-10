import { Time } from "@internationalized/date"
import { IncrementValues, TimeOption } from "../types"
import { formatToLocalisedTime } from "./formatToLocalisedTime"

type GetAllTimeOptionsConfig = {
  locale: string
  increments?: IncrementValues
}

export const getAllTimeOptions = ({
  locale,
  increments = 30,
}: GetAllTimeOptionsConfig): Record<string, TimeOption> =>
  Array.from(Array(24).keys()).reduce((options, hour) => {
    Array.from(Array(60 / increments).keys()).forEach(increment => {
      const minutes = increment * increments
      const time = new Time(hour, minutes)
      const formattedTime = formatToLocalisedTime({ hour, minutes, locale })

      options[formattedTime] = {
        label: formattedTime,
        value: time,
      }
    })
    return options
  }, {} as Record<string, TimeOption>)
