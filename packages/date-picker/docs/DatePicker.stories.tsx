import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePickerWrapper as DatePicker } from "../src/DatePicker"

export default {
  title: `${CATEGORIES.components}/DatePicker`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/date-picker"',
      },
    },
  },
}

export const KaizenDefault = props => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const handleDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      labelText="Label"
      selectedDate={selectedDate}
      handleDayChange={handleDayChange}
      {...props}
    />
  )
}

export const DefaultWithValue = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const handleDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      labelText="Label"
      selectedDate={new Date()}
      handleDayChange={handleDayChange}
    />
  )
}

export const Disabled = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const handleDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      labelText="Label"
      selectedDate={selectedDate}
      handleDayChange={handleDayChange}
      isDisabled
    />
  )
}

export const DisabledWithValue = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const handleDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      labelText="Label"
      selectedDate={new Date()}
      handleDayChange={handleDayChange}
      isDisabled
    />
  )
}
