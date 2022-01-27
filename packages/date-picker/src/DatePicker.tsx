import React from "react"
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"

type DatePickerProps = {
  selectedDate?: Date
  handleDayChange: (day: Date) => void
}

export const DatePickerWrapper = (props: DatePickerProps) => (
  <>
    <p>this is the date: {props.selectedDate?.toString()}</p>
    <DayPickerInput
      value={props.selectedDate}
      onDayChange={props.handleDayChange}
      dayPickerProps={{
        selectedDays: props.selectedDate,
        disabledDays: {
          daysOfWeek: [0, 6],
        },
      }}
    />
  </>
)
