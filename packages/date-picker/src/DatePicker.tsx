import { TextField } from "@kaizen/draft-form"
import React, { RefObject, useState } from "react"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import "react-day-picker/lib/style.css"
import DayPicker from "react-day-picker/DayPicker"
import styles from "./DatePicker.scss"
import { CalendarNav, CalendarNavProps } from "./CalendarNav"
import { defaultDatePickerClasses } from "./DatePickerClasses"

type DatePickerProps = {
  id: string
  selectedDate?: Date
  onDayChange: (day: Date) => void
  labelText?: string
  isDisabled?: boolean
  inputRef?: RefObject<HTMLInputElement> | undefined
  description?: string
}

export const DatePickerWrapper: React.FunctionComponent<DatePickerProps> = ({
  id,
  selectedDate,
  onDayChange,
  labelText,
  isDisabled = false,
  inputRef,
  description,
  ...inputProps
}) => (
  <>
    <TextField
      id={id}
      labelText={labelText}
      icon={dateStart}
      inputValue={selectedDate ? selectedDate.toLocaleDateString() : undefined}
      disabled={isDisabled}
      inputRef={inputRef}
      description={description}
      {...inputProps}
    />

    <DayPicker
      selectedDays={selectedDate}
      // TODO create disabledDays prop, this is to display disabled styling
      disabledDays={{
        daysOfWeek: [6],
      }}
      onDayClick={onDayChange}
      navbarElement={({ ...navbarProps }: CalendarNavProps) => (
        <CalendarNav {...navbarProps} />
      )}
      classNames={defaultDatePickerClasses}
      className={styles.calendar}
    />
  </>
)
