import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "../FilterDateRangePicker/FilterDateRangePicker.module.scss"
import { DateRangeDisplayLabel } from "../FilterDateRangePicker/components/DateRangeDisplayLabel"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "../FilterDateRangePicker/components/DateRangeInputField"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
  RemovableFilterTriggerButton,
} from "../FilterDateRangePicker/components/Trigger"
import { isCompleteDateRange } from "../FilterDateRangePicker/utils/isCompleteDateRange"
import { CalendarRange, CalendarRangeProps } from "../_subcomponents/Calendar"
import { FloatingCalendarWrapper } from "../_subcomponents/FloatingCalendarWrapper"
import { useDateInputHandlers } from "../hooks/useDateInputHandlers"
import {
  DataAttributes,
  DateRange,
  DisabledDayMatchers,
  SupportedLocales,
} from "../types"
import { calculateDisabledDays } from "../utils/calculateDisabledDays"
import { formatDateAsText } from "../utils/formatDateAsText"
import { getLocale } from "../utils/getLocale"
import { FilterProvider, useFilterContext } from "./context/useFilterContext"
import { useFilterContextSol3 } from "./context/useFilterContextSol3"

type InputRangeStartProps = DateRangeInputFieldProps["inputRangeStartProps"]
type InputRangeEndProps = DateRangeInputFieldProps["inputRangeEndProps"]

type FilterInputProps<InputProps> = Omit<Partial<InputProps>, "value"> &
  DataAttributes

export interface FilterDateRangePickerProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>>,
    DisabledDayMatchers {
  id: string
  // label: string
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
  // onRemoveFilter?: () => void
  inputRangeStartProps?: FilterInputProps<InputRangeStartProps>
  inputRangeEndProps?: FilterInputProps<InputRangeEndProps>
  /**
   * Custom description to provide extra context (input format help text remains).
   */
  description?: DateRangeInputFieldProps["description"]
}

export const FilterDateRangePickerField = ({
  id,
  // label,
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
  // onRemoveFilter,
  inputRangeStartProps,
  inputRangeEndProps,
  description,
  classNameOverride,
  ...restProps
}: FilterDateRangePickerProps): JSX.Element => {
  // const { label, setSelectedValuesLabel } = useFilterContext()
  const { label } = useFilterContext()

  const locale = getLocale(propsLocale)
  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const [inputRangeStartValue, setInputRangeStartValue] = useState<
    InputRangeStartProps["value"]
  >(transformDateToInputValue(selectedRange?.from))
  const [inputRangeEndValue, setInputRangeEndValue] = useState<
    InputRangeEndProps["value"]
  >(transformDateToInputValue(selectedRange?.to))

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    onRangeChange(dateRange)
  }

  // @note: this isn't needed as the Filter will reset the state
  // useEffect(() => {
  //   const rangeStart = transformDateToInputValue(selectedRange?.from)
  //   const rangeEnd = transformDateToInputValue(selectedRange?.to)

  //   if (rangeStart !== inputRangeStartValue) {
  //     setInputRangeStartValue(transformDateToInputValue(selectedRange?.from))
  //   }
  //   if (rangeEnd !== inputRangeEndValue) {
  //     setInputRangeEndValue(transformDateToInputValue(selectedRange?.to))
  //   }
  // }, [selectedRange?.from, selectedRange?.to])

  const inputRangeStartHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeStartValue,
    onDateChange: date =>
      handleDateRangeChange({ from: date, to: selectedRange?.to }),
    ...inputRangeStartProps,
  })

  const inputRangeEndHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeEndValue,
    onDateChange: date =>
      handleDateRangeChange({ from: selectedRange?.from, to: date }),
    ...inputRangeEndProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    setInputRangeStartValue(transformDateToInputValue(range?.from))
    setInputRangeEndValue(transformDateToInputValue(range?.to))
    handleDateRangeChange(range)
  }

  return (
    <div
      className={classnames(
        // styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      <DateRangeInputField
        id={`${id}--input`}
        legend={label}
        inputRangeStartProps={{
          labelText: "Date from",
          value: inputRangeStartValue,
          ...inputRangeStartProps,
          // The below props extend the values from inputRangeStartProps, therefore must be below the spread
          ...inputRangeStartHandlers,
        }}
        inputRangeEndProps={{
          labelText: "Date to",
          value: inputRangeEndValue,
          ...inputRangeEndProps,
          // The below props extend the values from inputRangeEndProps, therefore must be below the spread
          ...inputRangeEndHandlers,
        }}
        locale={locale}
        description={description}
        classNameOverride={styles.dateRangeInputField}
      />
      <CalendarRange
        defaultMonth={defaultMonth}
        disabled={disabledDays}
        locale={locale}
        selected={selectedRange}
        onSelect={handleCalendarSelectRange}
      />
    </div>
  )
}

FilterDateRangePickerField.displayName = "FilterDateRangePickerField"

export const FilterDateRangePickerFieldSol3 = ({
  id,
  // label,
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
  // onRemoveFilter,
  inputRangeStartProps,
  inputRangeEndProps,
  description,
  classNameOverride,
  ...restProps
}: FilterDateRangePickerProps): JSX.Element => {
  const { label, setSelectedValuesLabel } = useFilterContextSol3()

  const locale = getLocale(propsLocale)
  const disabledDays = calculateDisabledDays({
    disabledDates,
    disabledDaysOfWeek,
    disabledRange,
    disabledBeforeAfter,
    disabledBefore,
    disabledAfter,
  })

  const transformDateToInputValue = (date: Date | undefined): string =>
    date ? formatDateAsText(date, disabledDays, locale) : ""

  const [inputRangeStartValue, setInputRangeStartValue] = useState<
    InputRangeStartProps["value"]
  >(transformDateToInputValue(selectedRange?.from))
  const [inputRangeEndValue, setInputRangeEndValue] = useState<
    InputRangeEndProps["value"]
  >(transformDateToInputValue(selectedRange?.to))

  const handleDateRangeChange = (dateRange: DateRange | undefined): void => {
    setSelectedValuesLabel(
      isCompleteDateRange(dateRange) ? (
        <DateRangeDisplayLabel dateRange={dateRange} locale={locale} />
      ) : undefined
    )
    onRangeChange(dateRange)
  }

  const inputRangeStartHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeStartValue,
    onDateChange: date =>
      handleDateRangeChange({ from: date, to: selectedRange?.to }),
    ...inputRangeStartProps,
  })

  const inputRangeEndHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: setInputRangeEndValue,
    onDateChange: date =>
      handleDateRangeChange({ from: selectedRange?.from, to: date }),
    ...inputRangeEndProps,
  })

  const handleCalendarSelectRange: CalendarRangeProps["onSelect"] = range => {
    setInputRangeStartValue(transformDateToInputValue(range?.from))
    setInputRangeEndValue(transformDateToInputValue(range?.to))
    handleDateRangeChange(range)
  }

  return (
    <div
      className={classnames(
        // styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      <DateRangeInputField
        id={`${id}--input`}
        legend={label}
        inputRangeStartProps={{
          labelText: "Date from",
          value: inputRangeStartValue,
          ...inputRangeStartProps,
          // The below props extend the values from inputRangeStartProps, therefore must be below the spread
          ...inputRangeStartHandlers,
        }}
        inputRangeEndProps={{
          labelText: "Date to",
          value: inputRangeEndValue,
          ...inputRangeEndProps,
          // The below props extend the values from inputRangeEndProps, therefore must be below the spread
          ...inputRangeEndHandlers,
        }}
        locale={locale}
        description={description}
        classNameOverride={styles.dateRangeInputField}
      />
      <CalendarRange
        defaultMonth={defaultMonth}
        disabled={disabledDays}
        locale={locale}
        selected={selectedRange}
        onSelect={handleCalendarSelectRange}
      />
    </div>
  )
}

FilterDateRangePickerFieldSol3.displayName = "FilterDateRangePickerFieldSol3"
