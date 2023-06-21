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

type DatePickerDate = Date | undefined
type ValidatDate = (date: DatePickerDate, inputValue: string) => DatePickerDate

type FilterDatePickerState = {
  selectedDate: DatePickerDate
  inputValue: string
  locale: Locale
  validateDate: ValidatDate
  disabledDays?: DisabledDays
  startMonth?: Date
  defaultMonth?: Date
  validationMessage?: ValidationMessage
}

type Actions =
  | {
      type: "update_input_value"
      date: Date | string | undefined
    }
  | { type: "update_start_month"; date: DatePickerDate }
  | {
      type: "update_selected_date"
      date: DatePickerDate
    }
  | { type: "update_validation_message"; data: ValidationMessage }

const transformDateToInputValue = (
  date: DatePickerDate,
  disabledDays: DisabledDays,
  locale: Locale
): string => (date ? formatDateAsText(date, disabledDays, locale) : "")

const reducer = (
  state: FilterDatePickerState,
  action: Actions
): FilterDatePickerState => {
  console.log("pinned dispatched", action)
  switch (action.type) {
    case "update_selected_date":
      return {
        ...state,
        selectedDate: state.validateDate(action.date, state.inputValue),
      }
    case "update_input_value":
      return {
        ...state,
        inputValue:
          typeof action.date !== "string"
            ? transformDateToInputValue(
                action.date,
                state.disabledDays,
                state.locale
              )
            : action.date,
      }
    case "update_start_month":
      return {
        ...state,
        startMonth:
          action.date && !isInvalidDate(action.date)
            ? action.date
            : state.defaultMonth || new Date(),
      }
    case "update_validation_message":
      return {
        ...state,
        validationMessage: action.data,
      }
  }
}

type SetupFilterDatePickerState = {
  selectedDate: DatePickerDate
  disabledDays: DisabledDays
  defaultMonth: DatePickerDate
  locale: FilterDateSupportedLocales
  validateDate: ValidatDate
  validationMessage?: ValidationMessage
}

const setupFilterDatePickerState = ({
  selectedDate,
  disabledDays,
  defaultMonth,
  locale,
  validateDate,
  validationMessage,
}: SetupFilterDatePickerState): FilterDatePickerState => ({
  selectedDate,
  inputValue: "",
  locale: getLocale(locale),
  validationMessage,
  validateDate,
  defaultMonth,
  disabledDays,
  startMonth:
    selectedDate && !isInvalidDate(selectedDate)
      ? selectedDate
      : defaultMonth || new Date(),
})

export const FilterDatePickerField = ({
  id,
  inputProps,
  locale,
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
  const handleDateChange = (date: DatePickerDate): void => {
    dispatch({ type: "update_selected_date", date })
    onDateChange(date)
  }

  const dateValidation = useSingleDateValidation({
    disabledDays,
    validationMessage,
    onValidate,
  })

  const validateDate = (
    date: DatePickerDate,
    inputValue: string
  ): DatePickerDate => dateValidation.validateDate({ date, inputValue })

  const [state, dispatch] = useReducer(
    reducer,
    setupFilterDatePickerState({
      selectedDate,
      disabledDays,
      defaultMonth,
      locale,
      validateDate,
      validationMessage,
    })
  )

  const handleInputChange = (date: DatePickerDate): void => {
    handleDateChange(date)
    dispatch({ type: "update_input_value", date })
  }

  const inputDateHandlers = useDateInputHandlers({
    locale: state.locale,
    disabledDays,
    setInputValue: value =>
      dispatch({
        type: "update_input_value",
        date: value as string,
      }),
    onDateChange: date => {
      handleDateChange(date)

      if (date && !isInvalidDate(date)) {
        dispatch({ type: "update_start_month", date })
        onDateSubmit?.(date)
      }
    },
    ...inputProps,
  })

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    handleInputChange(date)
    onDateSubmit?.(date)
  }

  useEffect(() => {
    handleInputChange(selectedDate)
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
        locale={state.locale}
        value={state.inputValue}
        description={description}
        validationMessage={dateValidation.validationMessage}
        {...inputDateHandlers}
        {...inputProps}
      />
      <CalendarSingle
        disabled={disabledDays}
        locale={state.locale}
        selected={state.selectedDate}
        onSelect={handleCalendarSelect}
        month={state.startMonth}
        onMonthChange={(value: Date) =>
          dispatch({ type: "update_start_month", date: value })
        }
      />
    </div>
  )
}
