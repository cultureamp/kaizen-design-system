import React, { HTMLAttributes, useEffect, useReducer } from "react"
import classnames from "classnames"
import {
  CalendarSingle,
  CalendarSingleProps,
  useDateInputHandlers,
  isInvalidDate,
  formatDateAsText,
  getLocale,
} from "@kaizen/date-picker"
import { parseDateFromTextFormatValue } from "@kaizen/date-picker/src/utils/parseDateFromTextFormatValue"
import { FilterProps } from "~components/Filter"
import { DateInputDescriptionProps } from "~components/FilterDateRangePicker/subcomponents/DateInputDescription"
import { DataAttributes } from "~types/DataAttributes"
import { DisabledDays, FilterDateSupportedLocales } from "~types/DatePicker"
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
   * Callback when date is saved/committed/submitted valid date by either by the calendar picker or by typing and blurring.
   * Date will return as `undefined` if empty, invalid or disabled.
   *
   * Distinctly different from `change` where that is triggered on any kind of event, we expect the final valid date in this function.
   */
  onDateSubmit?: (date: Date | undefined) => void
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

type DateOrUndefined = Date | undefined

type FilterDatePickerState = {
  selectedDate: DateOrUndefined
  inputValue: string
  startMonth: Date
}

type Actions =
  | {
      type: "update_from_external"
      date: DateOrUndefined
      disabledDays: DisabledDays
      locale: Locale
      inputValue: string
    }
  | {
      type: "update_from_input"
      date: string
      locale: Locale
    }
  | {
      type: "navigate_months"
      date: Date
    }
  | {
      type: "update_from_calendar"
      date: DateOrUndefined
      disabledDays: DisabledDays
      locale: Locale
      inputValue: string
    }

const transformDateToInputValue = (
  date: DateOrUndefined,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")

const reducer = (
  state: FilterDatePickerState,
  action: Actions
): FilterDatePickerState => {
  console.log("pinned dispatched", action)
  switch (action.type) {
    case "update_from_external":
      return {
        ...state,
        selectedDate: action.date,
        inputValue: action.inputValue,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "update_from_calendar":
      return {
        ...state,
        selectedDate: action.date,
        inputValue: action.inputValue,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "navigate_months":
      return {
        ...state,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "update_from_input":
      return {
        ...state,
        inputValue: action.date,
        selectedDate: parseDateFromTextFormatValue(action.date, action.locale),
        startMonth:
          action.date &&
          !isInvalidDate(
            parseDateFromTextFormatValue(action.date, action.locale)
          )
            ? parseDateFromTextFormatValue(action.date, action.locale)
            : new Date(),
      }
  }
}

type SetupFilterDatePickerState = {
  selectedDate: DateOrUndefined
  defaultMonth?: Date
  inputValue?: string
}

const setupFilterDatePickerState = ({
  selectedDate,
  defaultMonth,
  inputValue,
}: SetupFilterDatePickerState): FilterDatePickerState => ({
  selectedDate,
  inputValue: inputValue || "",
  startMonth:
    selectedDate && !isInvalidDate(selectedDate)
      ? selectedDate
      : defaultMonth || new Date(),
})

export const FilterDatePickerField = ({
  id,
  inputProps,
  locale: propsLocale,
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
}: FilterDatePickerFieldProps): JSX.Element => {
  const locale = getLocale(propsLocale)

  const dateValidation = useSingleDateValidation({
    disabledDays,
    validationMessage,
    onValidate,
  })

  const validateDate = (date: DateOrUndefined): DateOrUndefined =>
    dateValidation.validateDate({ date, inputValue: state.inputValue })

  const [state, dispatch] = useReducer(
    reducer,
    setupFilterDatePickerState({
      selectedDate,
      defaultMonth,
      inputValue: transformDateToInputValue(selectedDate, disabledDays, locale),
    })
  )

  const handleDateChange = (date: DateOrUndefined): void => {
    const newDate = validateDate(date)

    dispatch({
      type: "update_from_external",
      date: newDate,
      inputValue: transformDateToInputValue(newDate, disabledDays, locale),
      disabledDays,
      locale,
    })
    onDateChange(state.selectedDate)
  }

  const inputDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: value => handleInputChange(value as string),
    onDateChange: date => {
      handleDateChange(date)
    },
    ...inputProps,
  })

  const handleInputChange = (date: string): void => {
    dispatch({
      type: "update_from_input",
      date,
      locale,
    })

    const convertedDate = parseDateFromTextFormatValue(date, locale)

    if (date && !isInvalidDate(convertedDate)) {
      onDateSubmit?.(convertedDate)
    }
  }

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    const newDate = validateDate(date)

    dispatch({
      type: "update_from_calendar",
      date: newDate,
      inputValue: transformDateToInputValue(newDate, disabledDays, locale),
      disabledDays,
      locale,
    })
    onDateSubmit?.(state.selectedDate)
    onDateChange(state.selectedDate)
  }

  useEffect(() => {
    validateDate(selectedDate)
  }, [])

  useEffect(() => {
    console.log("pinned state", state)
  }, [state])

  return (
    <div
      className={classnames(styles.filterDatePickerField, classNameOverride)}
      {...restProps}
    >
      <DateInputField
        id={`${id}--input`}
        locale={locale}
        value={state.inputValue}
        description={description}
        validationMessage={dateValidation.validationMessage}
        {...inputDateHandlers}
        {...inputProps}
      />
      <CalendarSingle
        disabled={disabledDays}
        locale={locale}
        selected={state.selectedDate}
        onSelect={handleCalendarSelect}
        month={state.startMonth}
        onMonthChange={(value: Date) =>
          dispatch({ type: "navigate_months", date: value })
        }
      />
    </div>
  )
}
