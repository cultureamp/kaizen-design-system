import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePickerWrapper as DatePicker } from "../src/DatePicker"

export default {
  title: `${CATEGORIES.components}/DatePicker`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/DatePicker"',
      },
    },
  },
}

export const KaizenDefault = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const handleDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker selectedDate={selectedDate} handleDayChange={handleDayChange} />
  )
}
