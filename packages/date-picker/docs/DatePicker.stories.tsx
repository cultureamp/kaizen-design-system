import React, { useState } from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"

export default {
  title: `${CATEGORIES.components}/Date Picker`,
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
      id="make-me-unique-1"
      labelText="Label"
      selectedDate={selectedDate}
      onChange={onDayChange}
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
      id="make-me-unique-2"
      labelText="Label"
      onChange={onDayChange}
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
      id="make-me-unique-3"
      labelText="Label"
      selectedDate={new Date()}
      onChange={onDayChange}
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
      id="make-me-unique-4"
      labelText="Label"
      selectedDate={selectedDate}
      onChange={onDayChange}
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
      id="make-me-unique-5"
      labelText="Label"
      selectedDate={new Date()}
      onChange={onDayChange}
      isDisabled
    />
  )
}
