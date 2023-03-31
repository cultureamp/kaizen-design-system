import React, { useEffect, HTMLAttributes, useState } from "react"
import classnames from "classnames"
import {
  CalendarRange,
  CalendarRangeProps,
} from "@kaizen/date-picker/src/_subcomponents/Calendar"
import { useDateInputHandlers } from "@kaizen/date-picker/src/hooks/useDateInputHandlers"
import { calculateDisabledDays } from "@kaizen/date-picker/src/utils/calculateDisabledDays"
import { formatDateAsText } from "@kaizen/date-picker/src/utils/formatDateAsText"
import { getLocale } from "@kaizen/date-picker/src/utils/getLocale"
import { isInvalidDate } from "@kaizen/date-picker/src/utils/isInvalidDate"
import { parseDateFromTextFormatValue } from "@kaizen/date-picker/src/utils/parseDateFromTextFormatValue"
import { DataAttributes } from "~types/DataAttributes"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "../DateRangeInputField"
import { useEndDateValidation } from "./hooks/useEndDateValidation"
import { useStartDateValidation } from "./hooks/useStartDateValidation"
import {
  DateRange,
  DateRangeFieldValidationMessage,
  DateValidationResponse,
  DisabledDayMatchers,
  SupportedLocales,
} from "./types"
import styles from "./FilterDateRangePickerField.module.scss"

type InputRangeStartProps = DateRangeInputFieldProps["inputRangeStartProps"]
type InputRangeEndProps = DateRangeInputFieldProps["inputRangeEndProps"]

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDateRangePickerFieldProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>>,
    DisabledDayMatchers {
  id: string
  label: string
  locale: SupportedLocales
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
  inputRangeStartProps?: FilterInputProps<InputRangeStartProps>
  inputRangeEndProps?: FilterInputProps<InputRangeEndProps>
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
  disabledDates,
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
  inputRangeStartProps,
  inputRangeEndProps,
  description,
  validationMessage,
  onValidate,
  classNameOverride,
  ...restProps
}: FilterDateRangePickerFieldProps): JSX.Element => {
  const locale = getLocale(propsLocale)
  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })
  const inputRangeStartLabel = inputRangeStartProps?.labelText || "Date from"
  const inputRangeEndLabel = inputRangeEndProps?.labelText || "Date to"

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const rangeStart = selectedRange?.from
  const rangeEnd = selectedRange?.to
  const transformedRangeStart = transformDateToInputValue(rangeStart)
  const transformedRangeEnd = transformDateToInputValue(rangeEnd)

  const [startMonth, setStartMonth] = useState<Date>(
    // @todo: NEW; write test
    rangeStart && !isInvalidDate(rangeStart)
      ? rangeStart
      : defaultMonth || new Date()
  )

  const [inputRangeStartValue, setInputRangeStartValue] = useState<string>(
    transformedRangeStart
  )
  const [inputRangeEndValue, setInputRangeEndValue] =
    useState<string>(transformedRangeEnd)

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const startDateValidation = useStartDateValidation({
    inputLabel: inputRangeStartLabel,
    disabledDays,
    validationMessage: validationMessage?.dateStart,
    onValidate: onValidate?.dateStart,
  })

  const validateStartDate = (date: Date | undefined): Date | undefined =>
    startDateValidation.validateDate({ date, inputValue: inputRangeStartValue })

  const endDateValidation = useEndDateValidation({
    inputLabel: inputRangeEndLabel,
    disabledDays,
    validationMessage: validationMessage?.dateEnd,
    onValidate: onValidate?.dateEnd,
  })

  const validateEndDate = (date: Date | undefined): Date | undefined =>
    endDateValidation.validateDate({
      endDate: date,
      endDateInputValue: inputRangeEndValue,
      startDate: selectedRange?.from,
      startDateFieldLabel: inputRangeStartLabel,
    })

  const inputRangeStartHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeStartValue,
    onDateChange: date => {
      const newDate = validateStartDate(date)
      const endDate = parseDateFromTextFormatValue(inputRangeEndValue, locale)

      if (newDate && !isInvalidDate(endDate)) {
        const newEndDate = endDateValidation.validateEndDateBeforeStartDate({
          startDate: newDate,
          startDateFieldLabel: inputRangeStartLabel,
          endDate,
          endDateInputValue: inputRangeEndValue,
        })
        handleDateRangeChange({ from: newDate, to: newEndDate })
      } else {
        handleDateRangeChange({ from: newDate, to: rangeEnd })
      }

      if (newDate) setStartMonth(newDate)
    },
    ...inputRangeStartProps,
  })

  const inputRangeEndHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeEndValue,
    onDateChange: date => {
      const newDate = validateEndDate(date)
      handleDateRangeChange({ from: rangeStart, to: newDate })
    },
    ...inputRangeEndProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    const newStartDate = validateStartDate(range?.from)
    const newEndDate = validateEndDate(range?.to)
    setInputRangeStartValue(transformDateToInputValue(newStartDate))
    setInputRangeEndValue(transformDateToInputValue(newEndDate))
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
        inputRangeStartProps={{
          labelText: inputRangeStartLabel,
          value: inputRangeStartValue,
          ...inputRangeStartProps,
          // The below props extend the values from inputRangeStartProps, therefore must be below the spread
          ...inputRangeStartHandlers,
        }}
        inputRangeEndProps={{
          labelText: inputRangeEndLabel,
          value: inputRangeEndValue,
          ...inputRangeEndProps,
          // The below props extend the values from inputRangeEndProps, therefore must be below the spread
          ...inputRangeEndHandlers,
        }}
        locale={locale}
        description={description}
        validationMessage={{
          dateStart: startDateValidation.validationMessage,
          dateEnd: endDateValidation.validationMessage,
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
