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
import { FilterProps } from "~components/Filter"
import { useDateValidation } from "~components/FilterDatePicker"
import { DateInputDescriptionProps } from "~components/FilterDateRangePicker/subcomponents/DateInputDescription"
import { DataAttributes } from "~types/DataAttributes"
import { DisabledDays, FilterDateSupportedLocales } from "~types/DatePicker"
import { OverrideClassName } from "~types/OverrideClassName"
import { DateValidationResponse, ValidationMessage } from "../../types"
import { DateInputField, DateInputFieldProps } from "../DateInputField"
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

type FilterDatePickerState = {
  selectedDate: Date | undefined
  inputValue: string
  startMonth: Date
}

type Actions =
  | {
      type: "update_selected_date"
      date: Date | undefined
      inputValue?: string
    }
  | {
      type: "navigate_months"
      date: Date | undefined
    }
  | {
      type: "update_input_field"
      inputValue: string
    }

const transformDateToInputValue = (
  date: Date | undefined,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")

const parseInputValue = (stateValue: string, inputValue?: string) => {
  if (inputValue === undefined) return stateValue
  if (inputValue === "") return inputValue
  return inputValue
}

const reducer = (
  state: FilterDatePickerState,
  action: Actions
): FilterDatePickerState => {
  switch (action.type) {
    case "update_selected_date":
      const getInputValue = () => {}
      return {
        ...state,
        selectedDate: action.date,
        inputValue: parseInputValue(state.inputValue, action.inputValue),
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "navigate_months":
      return {
        ...state,
        startMonth:
          action.date && !isInvalidDate(action.date) ? action.date : new Date(),
      }
    case "update_input_field":
      return {
        ...state,
        inputValue: action.inputValue,
      }
  }
}

type SetupFilterDatePickerState = {
  selectedDate: Date | undefined
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

  const dateValidation = useDateValidation({
    disabledDays,
    validationMessage,
    onValidate,
  })

  const validateDate = (
    date: Date | undefined,
    inputValue: string
  ): Date | undefined => {
    const { validationResponse, newDate } = dateValidation.validateDate({
      date,
      inputValue,
    })
    dateValidation.updateValidation(validationResponse)

    return newDate
  }

  const [state, dispatch] = useReducer(
    reducer,
    setupFilterDatePickerState({
      selectedDate,
      defaultMonth,
      inputValue: transformDateToInputValue(selectedDate, disabledDays, locale),
    })
  )

  const handleDateChange = (date: Date | undefined): void => {
    onDateChange(date)

    if (date && !isInvalidDate(date)) {
      onDateSubmit?.(date)
    }
  }

  const inputDateHandlers = useDateInputHandlers({
    locale,
    disabledDays,
    setInputValue: value => {
      dispatch({
        type: "update_input_field",
        inputValue: value as string,
      })
    },
    onDateChange: date => {
      // Because the input value is being tracked in the state as the user types
      // its able to accurately be picked up here when the `onBlur` function
      // triggers this `onDateChange` function.
      validateDate(date, state.inputValue)

      dispatch({
        type: "update_selected_date",
        date,
      })

      handleDateChange(date)
    },
    ...inputProps,
  })

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    // Transforming the date to an InputValue and validating the date with the result
    // can operate in this order because we are guaranteed a valid date from the calendar.
    //
    // In all other scenarios, this won't work as the return string from an invalid date
    // would be "Invalid Date" and not the actual value entered by the user since we want
    // the final error message to use the typed word from the user.
    const inputValue = transformDateToInputValue(date, disabledDays, locale)
    const newDate = validateDate(date, inputValue)

    dispatch({
      type: "update_selected_date",
      date: newDate,
      inputValue,
    })

    handleDateChange(date)
  }

  useEffect(() => {
    const inputValue = transformDateToInputValue(
      selectedDate,
      disabledDays,
      locale
    )

    validateDate(selectedDate, inputValue)
  }, [])

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
