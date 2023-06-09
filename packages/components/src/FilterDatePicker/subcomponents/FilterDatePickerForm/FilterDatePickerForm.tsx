import React, { HTMLAttributes, useEffect, useState } from "react"
import { Button } from "@kaizen/button"
import {
  CalendarSingleProps,
  useDateInputHandlers,
  isInvalidDate,
  formatDateAsText,
  getLocale,
} from "@kaizen/date-picker"
import { Divider } from "@kaizen/draft-divider"
import { FilterProps } from "~components/Filter"
import { DateInputDescriptionProps } from "~components/FilterDateRangePicker/subcomponents/DateInputDescription"
import { DataAttributes } from "~types/DataAttributes"
import { DisabledDays, FilterDateSupportedLocales } from "~types/DatePicker"
import { OverrideClassName } from "~types/OverrideClassName"
import { DateValidationResponse, ValidationMessage } from "../../types"
import { DateInputFieldProps } from "../DateInputField"
import { FilterDatePickerField } from "../FilterDatePickerField"
import { useSingleDateValidation } from "./hooks/useSingleDateValidation"

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDatePickerFormProps
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
  onDateChange?: (date: Date | undefined) => void
  /**
   * Callback when date is saved/committed/submitted valid date by either by the calendar picker or by typing and blurring.
   * Date will return as `undefined` if empty, invalid or disabled.
   *
   * Distinctly different from `change` where that is triggered on any kind of event, we expect the final valid date in this function.
   */
  onDateSubmit: (date: Date | undefined) => void
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

export const FilterDatePickerForm = ({
  id,
  inputProps,
  locale: localeProp,
  defaultMonth,
  selectedDate,
  onDateChange,
  onDateSubmit,
  disabledDays,
  description,
  validationMessage,
  onValidate,
  classNameOverride,
  ...restProps
}: FilterDatePickerFormProps): JSX.Element => {
  const locale = getLocale(localeProp)
  const inputLabel = inputProps?.labelText || "Date"
  const [internalDate, setInternalDate] = useState<Date | undefined>(
    selectedDate
  )

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
    setInternalDate(date)
    onDateChange?.(date)
  }

  const dateValidation = useSingleDateValidation({
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
      handleDateChange(date)

      if (newDate) setStartMonth(newDate)
    },
    ...inputProps,
  })

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    const newDate = validateDate(date)
    setInputDateValue(transformDateToInputValue(newDate))
    handleDateChange(date)
  }

  useEffect(() => {
    const newDate = validateDate(internalDate)
    handleDateChange(newDate)
  }, [])

  const handleApply = (): void => {
    const newDate = validateDate(internalDate)

    if (newDate) {
      handleDateChange(newDate)
      onDateSubmit?.(newDate)
    }
  }

  return (
    <div className={classNameOverride}>
      <FilterDatePickerField
        id={id}
        locale={localeProp}
        disabled={disabledDays}
        selected={internalDate}
        onSelect={handleCalendarSelect}
        month={startMonth}
        onMonthChange={setStartMonth}
        inputProps={{
          labelText: inputLabel,
          value: inputDateValue,
          description,
          validationMessage: dateValidation.validationMessage,
          ...inputDateHandlers,
          ...inputProps,
        }}
        {...restProps}
      />
      <Divider variant="menuSeparator" />
      <Button type="button" label="Apply" onClick={handleApply} />
    </div>
  )
}

FilterDatePickerForm.displayName = "FilterDatePickerForm"
