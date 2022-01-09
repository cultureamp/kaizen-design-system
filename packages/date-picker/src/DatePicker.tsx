import React, { useState } from "react"
import "react-dates/initialize"
import {
  DateRangePicker as DateRangePickerWrapper,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates"
import "react-dates/lib/css/_datepicker.css"

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  function handleDateChange() {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <DateRangePickerWrapper
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={handleDateChange} // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={() => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
    />
  )
}

export const DatePicker = () => {
  const [date, setDate] = useState(null)
  const [focused, setFocused] = useState<boolean | null>(null)

  return (
    <SingleDatePicker
      date={date} // momentPropTypes.momentObj or null
      onDateChange={() => setDate(date)} // PropTypes.func.isRequired
      focused={focused} // PropTypes.bool
      onFocusChange={() => setFocused(!focused)} // PropTypes.func.isRequired
      id="your_unique_id" // PropTypes.string.isRequired,
    />
  )
}
