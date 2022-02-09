import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePickerWrapper as DatePicker, daysOfWeek } from "../src/DatePicker"

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

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="date-picker"
      labelText="Label"
      selectedDate={selectedDate}
      onDayChange={onDayChange}
      // disabledDaysOfWeek={[daysOfWeek.Mon, daysOfWeek.Tue]}
      // disabledRange={{
      //   from: new Date(2022, 1, 12),
      //   to: new Date(2022, 1, 16),
      // }}
      // disabledBeforeAfter={{
      //   before: new Date(2022, 1, 12),
      //   after: new Date(2022, 1, 16),
      // }}
      // disabledBefore={new Date()}
      // disabledAfter={new Date(2022, 1, 23)}
      // disabledDates={[new Date(2022, 1, 12), new Date(2022, 1, 25)]}
      description
    />
  )
}

export const DefaultWithValue = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="date-picker"
      labelText="Label"
      selectedDate={new Date()}
      onDayChange={onDayChange}
    />
  )
}

export const Disabled = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="date-picker"
      labelText="Label"
      selectedDate={selectedDate}
      onDayChange={onDayChange}
      isDisabled
    />
  )
}

export const DisabledWithValue = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="date-picker"
      labelText="Label"
      selectedDate={new Date()}
      onDayChange={onDayChange}
      isDisabled
    />
  )
}
