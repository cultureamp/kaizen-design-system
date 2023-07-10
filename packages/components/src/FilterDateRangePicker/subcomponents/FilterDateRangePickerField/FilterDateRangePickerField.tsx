import React, { useEffect, HTMLAttributes, useReducer } from "react"
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
import { filterDatePickerFieldReducer } from "./filterDateRangePickerFieldReducer"
import { useEndDateValidation } from "./hooks/useEndDateValidation"
import { useStartDateValidation } from "./hooks/useStartDateValidation"
import { DateRangeFieldValidationMessage } from "./types"
import styles from "./FilterDateRangePickerField.module.scss"

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
  const locale = getLocale(propsLocale)
  const inputStartDateLabel = inputStartDateProps?.labelText || "Date from"
  const inputEndDateLabel = inputEndDateProps?.labelText || "Date to"

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  const dateStartValidation = useStartDateValidation({
    inputLabel: inputStartDateLabel,
    disabledDays,
    validationMessage: validationMessage?.dateStart,
    onValidate: onValidate?.dateStart,
  })

  const dateEndValidation = useEndDateValidation({
    inputLabel: inputEndDateLabel,
    disabledDays,
    validationMessage: validationMessage?.dateEnd,
    onValidate: onValidate?.dateEnd,
  })

  const validateStartDate = (
    date: Date | undefined,
    inputValue: string
  ): Date | undefined =>
    dateStartValidation.validateDate({
      date,
      inputValue,
    })

  const validateEndDate = (
    date: Date | undefined,
    inputValue: string
  ): Date | undefined =>
    dateEndValidation.validateDate({
      endDate: date,
      endDateInputValue: inputValue,
      startDate: selectedRange?.from,
      startDateFieldLabel: inputStartDateLabel,
    })

  const [state, dispatch] = useReducer(filterDatePickerFieldReducer, {
    selectedStartDate: selectedRange?.from,
    selectedEndDate: selectedRange?.to,
    inputStartValue: transformDateToInputValue(selectedRange?.from),
    inputEndValue: transformDateToInputValue(selectedRange?.to) || "",
    startMonth:
      selectedRange?.from && !isInvalidDate(selectedRange?.from)
        ? selectedRange?.from
        : defaultMonth || new Date(),
  })

  const inputStartDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    onValueChange: value => {
      dispatch({
        type: "update_input_start_field",
        inputValue: value,
      })
    },
    onDateChange: date => {
      const newDate = validateStartDate(date, state.inputStartValue)
      const endDate = parseDateFromTextFormatValue(state.inputEndValue, locale)

      dispatch({
        type: "update_selected_start_date",
        date: newDate,
      })

      dispatch({
        type: "update_selected_end_date",
        date: endDate,
      })

      if (newDate && !isInvalidDate(endDate)) {
        const newEndDate = dateEndValidation.validateEndDateBeforeStartDate({
          startDate: newDate,
          startDateFieldLabel: inputStartDateLabel,
          endDate,
          endDateInputValue: state.inputEndValue,
        })
        handleDateRangeChange({ from: newDate, to: newEndDate })
      } else {
        handleDateRangeChange({ from: newDate, to: state.selectedEndDate })
      }
    },
    ...inputStartDateProps,
  })

  const inputEndDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    onValueChange: value => {
      dispatch({
        type: "update_input_end_field",
        inputValue: value as string,
      })
    },
    onDateChange: date => {
      const newDate = validateEndDate(date, state.inputEndValue)

      dispatch({
        type: "update_selected_end_date",
        date: newDate,
      })

      handleDateRangeChange({ from: state.selectedStartDate, to: newDate })
    },
    ...inputEndDateProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    const inputStartValue = transformDateToInputValue(range?.from)
    const inputEndValue = transformDateToInputValue(range?.to)

    const newStartDate = validateStartDate(range?.from, inputStartValue)
    const newEndDate = validateEndDate(range?.to, inputEndValue)

    dispatch({
      type: "update_selected_start_date",
      date: newStartDate,
      inputValue: inputStartValue,
    })

    dispatch({
      type: "update_selected_end_date",
      date: newEndDate,
      inputValue: inputEndValue,
    })

    handleDateRangeChange({ from: newStartDate, to: newEndDate })
  }

  useEffect(() => {
    const newStartDate = validateStartDate(
      selectedRange?.from,
      state.inputStartValue
    )
    const newEndDate = validateEndDate(selectedRange?.to, state.inputEndValue)
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
          value: state.inputStartValue,
          ...inputStartDateProps,
          // The below props extend the values from inputStartDateProps, therefore must be below the spread
          ...inputStartDateHandlers,
        }}
        inputEndDateProps={{
          labelText: inputEndDateLabel,
          value: state.inputEndValue,
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
        month={state.startMonth}
        onMonthChange={(value: Date) =>
          dispatch({ type: "navigate_months", date: value })
        }
      />
    </div>
  )
}

FilterDateRangePickerField.displayName = "FilterDateRangePickerField"
