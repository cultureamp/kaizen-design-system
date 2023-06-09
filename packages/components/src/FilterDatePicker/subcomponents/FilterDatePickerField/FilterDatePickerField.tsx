import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import { Locale } from "date-fns"
import { Button } from "@kaizen/button"
import {
  CalendarSingle,
  CalendarSingleProps,
  getLocale,
} from "@kaizen/date-picker"
import { Divider } from "@kaizen/draft-divider"
import { FilterProps } from "~components/Filter"
import { DateInputDescriptionProps } from "~components/FilterDateRangePicker/subcomponents/DateInputDescription"
import { DataAttributes } from "~types/DataAttributes"
import { DisabledDays, FilterDateSupportedLocales } from "~types/DatePicker"
import { OverrideClassName } from "~types/OverrideClassName"
import { DateValidationResponse, ValidationMessage } from "../../types"
import { DateInputField, DateInputFieldProps } from "../DateInputField"
import { useSingleDateValidation } from "./hooks/useSingleDateValidation"
import styles from "./FilterDatePickerField.module.scss"

type FilterInputProps<InputProps> = Partial<InputProps> & DataAttributes

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

export const FilterDatePickerField = ({
  id,
  inputProps,
  locale: localeProp,
  disabledDays,
  classNameOverride,
  selected,
  onSelect,
  month,
  onMonthChange,
  ...restProps
}: FilterDatePickerFieldProps): JSX.Element => {
  const locale = getLocale(localeProp)

  return (
    <div
      className={classnames(styles.filterDatePickerField, classNameOverride)}
      {...restProps}
    >
      <DateInputField id={`${id}--input`} locale={locale} {...inputProps} />
      <CalendarSingle
        disabled={disabledDays}
        locale={locale}
        selected={selected}
        onSelect={onSelect}
        month={month}
        onMonthChange={onMonthChange}
      />
    </div>
  )
}

FilterDatePickerField.displayName = "FilterDatePickerField"
