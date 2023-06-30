import React, { useEffect, HTMLAttributes, useState } from "react"
import classnames from "classnames"
import {
  CalendarRange,
  CalendarRangeProps,
} from "@kaizen/date-picker/src/_subcomponents/Calendar"
import { useDateInputHandlers } from "@kaizen/date-picker/src/hooks/useDateInputHandlers"
import { formatDateAsText } from "@kaizen/date-picker/src/utils/formatDateAsText"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { isInvalidDate } from "@kaizen/date-picker/src/utils/isInvalidDate"
import { parseDateFromTextFormatValue } from "@kaizen/date-picker/src/utils/parseDateFromTextFormatValue"
import { DateValidationResponse } from "~components/FilterDatePicker"
import { DataAttributes } from "~types/DataAttributes"
import {
  DateRange,
  DisabledDays,
  FilterDateSupportedLocales,
} from "~types/DatePicker"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "../DateRangeInputField"
import { useEndDateValidation } from "./hooks/useEndDateValidation"
import { useStartDateValidation } from "./hooks/useStartDateValidation"
import { DateRangeFieldValidationMessage } from "./types"
import styles from "./FilterDateRangePickerField.module.scss"
import { useIntl } from "@cultureamp/i18n-react-intl"

type InputStartDateProps = DateRangeInputFieldProps["inputStartDateProps"]
type InputEndDateProps = DateRangeInputFieldProps["inputEndDateProps"]

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDateRangePickerFieldProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  id: string
  label: string
  locale: FilterDateSupportedLocales
  /**
   * Sets first displayed month to month of provided date if there isn't a date set.
   */
  defaultMonth?: CalendarRangeProps["defaultMonth"]
  /**
   * The date range passed in from the consumer that renders in the inputs and calendar.
   */
  selectedRange: DateRange | undefined
  /**
   * Callback when date is updated either by the calendar picker or by typing and blurring.
   * Date will return as `undefined` if empty, invalid or disabled.
   */
  onRangeChange: (range: DateRange | undefined) => void
  /**
   * See https://react-day-picker.js.org/api/types/Matcher
   */
  disabledDays?: DisabledDays
  inputStartDateProps?: FilterInputProps<InputStartDateProps>
  inputEndDateProps?: FilterInputProps<InputEndDateProps>
  /**
   * Custom description to provide extra context (input format help text remains).
   */
  description?: DateRangeInputFieldProps["description"]
  validationMessage?: DateRangeFieldValidationMessage
  /**
   * Callback when a date is selected. Utilises internal validation if not set.
   */
  onValidate?: {
    dateStart?: (validationResponse: DateValidationResponse) => void
    dateEnd?: (validationResponse: DateValidationResponse) => void
  }
}

export const FilterDateRangePickerField = ({
  id,
  label,
  locale: propsLocale,
  defaultMonth,
  selectedRange,
  onRangeChange,
  disabledDays,
  inputStartDateProps,
  inputEndDateProps,
  description,
  validationMessage,
  onValidate,
  classNameOverride,
  ...restProps
}: FilterDateRangePickerFieldProps): JSX.Element => {
  const { formatMessage } = useIntl()
  const locale = getLocale(propsLocale)

  const translatedDateFrom = formatMessage({
    id: "filterDateRangePicker.dateFrom",
    defaultMessage: "Default date-from message",
    description: "Description for date-from",
  })
  const translatedDateTo = formatMessage({
    id: "filterDateRangePicker.dateTo",
    defaultMessage: "Default date-to message",
    description: "Description for date-to",
  })
  const inputStartDateLabel =
    inputStartDateProps?.labelText || translatedDateFrom
  const inputEndDateLabel = inputEndDateProps?.labelText || translatedDateTo

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const rangeStart = selectedRange?.from
  const rangeEnd = selectedRange?.to
  const transformedStartDate = transformDateToInputValue(rangeStart)
  const transformedEndDate = transformDateToInputValue(rangeEnd)

  const [startMonth, setStartMonth] = useState<Date>(
    rangeStart && !isInvalidDate(rangeStart)
      ? rangeStart
      : defaultMonth || new Date()
  )

  const [inputStartDateValue, setInputStartDateValue] =
    useState<string>(transformedStartDate)
  const [inputEndDateValue, setInputEndDateValue] =
    useState<string>(transformedEndDate)

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const dateStartValidation = useStartDateValidation({
    inputLabel: inputStartDateLabel,
    disabledDays,
    validationMessage: validationMessage?.dateStart,
    onValidate: onValidate?.dateStart,
  })

  const validateStartDate = (date: Date | undefined): Date | undefined =>
    dateStartValidation.validateDate({ date, inputValue: inputStartDateValue })

  const dateEndValidation = useEndDateValidation({
    inputLabel: inputEndDateLabel,
    disabledDays,
    validationMessage: validationMessage?.dateEnd,
    onValidate: onValidate?.dateEnd,
  })

  const validateEndDate = (date: Date | undefined): Date | undefined =>
    dateEndValidation.validateDate({
      endDate: date,
      endDateInputValue: inputEndDateValue,
      startDate: selectedRange?.from,
      startDateFieldLabel: inputStartDateLabel,
    })

  const inputStartDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputStartDateValue,
    onDateChange: date => {
      const newDate = validateStartDate(date)
      const endDate = parseDateFromTextFormatValue(inputEndDateValue, locale)

      if (newDate && !isInvalidDate(endDate)) {
        const newEndDate = dateEndValidation.validateEndDateBeforeStartDate({
          startDate: newDate,
          startDateFieldLabel: inputStartDateLabel,
          endDate,
          endDateInputValue: inputEndDateValue,
        })
        handleDateRangeChange({ from: newDate, to: newEndDate })
      } else {
        handleDateRangeChange({ from: newDate, to: rangeEnd })
      }

      if (newDate) setStartMonth(newDate)
    },
    ...inputStartDateProps,
  })

  const inputEndDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputEndDateValue,
    onDateChange: date => {
      const newDate = validateEndDate(date)
      handleDateRangeChange({ from: rangeStart, to: newDate })
    },
    ...inputEndDateProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    const newStartDate = validateStartDate(range?.from)
    const newEndDate = validateEndDate(range?.to)
    setInputStartDateValue(transformDateToInputValue(newStartDate))
    setInputEndDateValue(transformDateToInputValue(newEndDate))
    handleDateRangeChange({ from: newStartDate, to: newEndDate })
  }

  useEffect(() => {
    const newStartDate = validateStartDate(selectedRange?.from)
    const newEndDate = validateEndDate(selectedRange?.to)
    handleDateRangeChange({ from: newStartDate, to: newEndDate })
  }, [])

  return (
    <div
      className={classnames(
        styles.filterDateRangePickerField,
        classNameOverride
      )}
      {...restProps}
    >
      <DateRangeInputField
        id={`${id}--input`}
        legend={label}
        inputStartDateProps={{
          labelText: inputStartDateLabel,
          value: inputStartDateValue,
          ...inputStartDateProps,
          // The below props extend the values from inputStartDateProps, therefore must be below the spread
          ...inputStartDateHandlers,
        }}
        inputEndDateProps={{
          labelText: inputEndDateLabel,
          value: inputEndDateValue,
          ...inputEndDateProps,
          // The below props extend the values from inputEndDateProps, therefore must be below the spread
          ...inputEndDateHandlers,
        }}
        locale={locale}
        description={description}
        validationMessage={{
          dateStart: dateStartValidation.validationMessage,
          dateEnd: dateEndValidation.validationMessage,
        }}
        classNameOverride={styles.dateRangeInputField}
      />
      <CalendarRange
        disabled={disabledDays}
        locale={locale}
        selected={selectedRange}
        onSelect={handleCalendarSelectRange}
        month={startMonth}
        onMonthChange={setStartMonth}
      />
    </div>
  )
}

FilterDateRangePickerField.displayName = "FilterDateRangePickerField"
