import React, { HTMLAttributes, useEffect, useState } from "react"
import classnames from "classnames"
import {
  CalendarSingle,
  CalendarSingleProps,
  useDateInputHandlers,
  isInvalidDate,
  formatDateAsText,
  getLocale,
  DisabledDays,
} from "@kaizen/date-picker"
import { FilterProps } from "~components/Filter"
import { DateInputDescriptionProps } from "~components/FilterDatePicker/subcomponents/DateInputDescription"
import { DataAttributes } from "~types/DataAttributes"
import { FilterDateSupportedLocales } from "~types/DatePicker"
import { OverrideClassName } from "~types/OverrideClassName"
import { DateValidationResponse, ValidationMessage } from "../../types"
import { DateInputField, DateInputFieldProps } from "../DateInputField"
import { useSingleDateValidation } from "./hooks/useSingleDateValidation"
import styles from "./FilterDatePickerField.module.scss"

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDatePickerFieldProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  id: string
  locale: FilterDateSupportedLocales
  /**
   * Sets first displayed month to month of provided date if there isn't a date set.
   */
  defaultMonth?: CalendarSingleProps["defaultMonth"]
  /**
   * The date range passed in from the consumer that renders in the inputs and calendar.
   */
  selectedDate: Date | undefined
  /**
   * Callback when date is updated either by the calendar picker or by typing and blurring.
   * Date will return as `undefined` if empty, invalid or disabled.
   */
  onDateChange: (date: Date | undefined) => void
  /**
   * See https://react-day-picker.js.org/api/types/Matcher
   */
  disabledDays?: DisabledDays
  inputProps?: FilterInputProps<DateInputFieldProps>
  /**
   * Custom description to provide extra context (input format help text remains).
   */
  description?: DateInputDescriptionProps["description"]
  validationMessage?: ValidationMessage
  /**
   * Callback when a date is selected. Utilises internal validation if not set.
   */
  onValidate?: (validationResponse: DateValidationResponse) => void
  setIsFilterOpen?: FilterProps["setIsOpen"]
}

export const FilterDatePickerField = ({
  id,
  inputProps,
  locale: propsLocale,
  defaultMonth,
  selectedDate,
  onDateChange,
  disabledDays,
  description,
  validationMessage,
  onValidate,
  classNameOverride,
  setIsFilterOpen,
  ...restProps
}: FilterDatePickerFieldProps): JSX.Element => {
  const locale = getLocale(propsLocale)
  const inputLabel = inputProps?.labelText || "Date"

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const transformedDate = transformDateToInputValue(selectedDate)

  const [startMonth, setStartMonth] = useState<Date>(
    selectedDate && !isInvalidDate(selectedDate)
      ? selectedDate
      : defaultMonth || new Date()
  )

  const [inputDateValue, setInputDateValue] = useState<string>(transformedDate)

  const handleDateChange = (date: Date | undefined): void => {
    onDateChange(date)
  }

  const dateValidation = useSingleDateValidation({
    inputLabel: inputProps?.labelText || "Date",
    disabledDays,
    validationMessage,
    onValidate,
  })

  const validateDate = (date: Date | undefined): Date | undefined =>
    dateValidation.validateDate({ date, inputValue: inputDateValue })

  const inputDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputDateValue,
    onDateChange: date => {
      const newDate = validateDate(date)

      if (newDate) {
        setStartMonth(newDate)
        handleDateChange(newDate)
      }
    },
    ...inputProps,
  })

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    const newDate = validateDate(date)
    setInputDateValue(transformDateToInputValue(newDate))
    handleDateChange(newDate)

    // Close the filter when a date is selected
    setIsFilterOpen?.(false)
  }

  useEffect(() => {
    const newDate = validateDate(selectedDate)
    handleDateChange(newDate)
  }, [])

  return (
    <div
      className={classnames(styles.filterDatePickerField, classNameOverride)}
      {...restProps}
    >
      <DateInputField
        id={`${id}--input`}
        labelText={inputLabel}
        value={inputDateValue}
        locale={locale}
        description={description}
        validationMessage={dateValidation.validationMessage}
        {...inputDateHandlers}
        {...inputProps}
      />
      <CalendarSingle
        disabled={disabledDays}
        locale={locale}
        selected={selectedDate}
        onSelect={handleCalendarSelect}
        month={startMonth}
        onMonthChange={setStartMonth}
      />
    </div>
  )
}

FilterDatePickerField.displayName = "FilterDatePickerField"
