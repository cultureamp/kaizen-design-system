import React, { useState } from "react"
import classnames from "classnames"
import {
  CalendarSingle,
  CalendarSingleProps,
  useDateInputHandlers,
} from "@kaizen/date-picker"
import { formatDateAsText } from "@kaizen/date-picker/src/utils/formatDateAsText"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { isInvalidDate } from "@kaizen/date-picker/src/utils/isInvalidDate"
import { FilterProps } from "~components/Filter"
import { DataAttributes } from "~types/DataAttributes"
import { DateInputDescriptionProps } from "../DateInputDescription"
import { DateInputField, DateInputFieldProps } from "../DateInputField"
import { useDateValidation } from "./hooks/useDateValidation"
import {
  DisabledDays,
  DateValidationResponse,
  FilterDPSupportedLocales,
  ValidationMessage,
} from "./types"
import styles from "./FilterDatePickerField.module.scss"

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDatePickerFieldProps
  extends FilterInputProps<Omit<DateInputFieldProps, "id" | "locale">> {
  id: string
  label: string
  locale: FilterDPSupportedLocales
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
  /**
   * Custom description to provide extra context (input format help text remains).
   */
  description?: DateInputDescriptionProps["description"]
  validationMessage?: ValidationMessage
  /**
   * Callback when a date is selected. Utilises internal validation if not set.
   */
  onValidate?: (validationResponse: DateValidationResponse) => void
  setFilterOpen?: FilterProps["setIsOpen"]
}

export const FilterDatePickerField = ({
  id,
  label,
  locale: propsLocale,
  defaultMonth,
  selectedDate,
  onDateChange,
  disabledDays,
  description,
  validationMessage,
  onValidate,
  classNameOverride,
  setFilterOpen,
  ...restProps
}: FilterDatePickerFieldProps): JSX.Element => {
  const locale = getLocale(propsLocale)

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const transformedDate = transformDateToInputValue(selectedDate)

  const [inputDateValue, setInputDateValue] = useState<string>(transformedDate)

  const handleDateChange = (date: Date | undefined): void => {
    setFilterOpen?.(false)
    onDateChange(date)
  }

  const [startMonth, setStartMonth] = useState<Date>(
    selectedDate && !isInvalidDate(selectedDate)
      ? selectedDate
      : defaultMonth || new Date()
  )

  const dateValidation = useDateValidation({
    inputLabel: label,
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

      handleDateChange(newDate)

      if (newDate) setStartMonth(newDate)
    },
    ...restProps,
  })

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    const newDate = validateDate(date)

    setInputDateValue(transformDateToInputValue(newDate))

    handleDateChange(newDate)
  }

  return (
    <div
      className={classnames(styles.FilterDatePickerField, classNameOverride)}
      {...restProps}
    >
      <DateInputField
        id={id}
        locale={locale}
        aria-label={label}
        labelText=""
        value={inputDateValue}
        description={description}
        {...inputDateHandlers}
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
