import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"

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
    />
  )
}

export const DefaultWithDisabledDates = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="date-picker"
      labelText="Label"
      onDayChange={onDayChange}
      disabledRange={{ from: new Date(2022, 1, 14), to: new Date(2022, 1, 16) }}
      disabledDates={[new Date(2022, 1, 25)]}
      disabledBefore={new Date()}
    />
  )
}

export const DefaultInputWithValue = () => {
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

export const DisabledInput = () => {
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

export const DisabledInputWithValue = () => {
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
