import { TextField } from "@kaizen/draft-form"
import React, { useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import DayPicker from "react-day-picker/DayPicker"
import styles from "./DatePicker.scss"
import { CalendarNav, CalendarNavProps } from "./CalendarNav"
import { defaultDatePickerClasses } from "./DatePickerClasses"

type DatePickerProps = {
  selectedDate?: Date
  onDayChange: (day: Date) => void
  labelText?: string
  isDisabled?: boolean
}

export const DatePickerWrapper: React.FunctionComponent<DatePickerProps> = ({
  selectedDate,
  onDayChange,
  labelText,
  isDisabled = false,
}) => {
  const getNavbar = ({ ...navbarProps }: CalendarNavProps) => (
    <CalendarNav {...navbarProps} />
  )

  return (
    <>
      <TextField
        id="date-picker"
        labelText={labelText}
        icon={dateStart}
        inputValue={
          selectedDate ? selectedDate.toLocaleDateString() : undefined
        }
        disabled={isDisabled}
      />

      <DayPicker
        selectedDays={selectedDate}
        // TODO create disabledDays prop, this is to display disabled styling
        disabledDays={{
          daysOfWeek: [6],
        }}
        onDayClick={onDayChange}
        navbarElement={getNavbar}
        classNames={defaultDatePickerClasses}
        className={styles.calendar}
      />
    </>
  )
}
