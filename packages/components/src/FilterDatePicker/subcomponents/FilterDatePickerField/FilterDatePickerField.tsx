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

type DateOrUndefined = Date | undefined

type FilterDatePickerState = {
  selectedDate: DateOrUndefined
  inputValue: string
  startMonth: Date
}

type Actions =
  | {
      type: "update_selected_date"
      date: DateOrUndefined
    }
  | {
      type: "navigate_months"
      date: DateOrUndefined
    }
  | {
      type: "update_input_field"
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
  console.info(action.type, action)
  switch (action.type) {
    case "update_selected_date":
      return {
        ...state,
        selectedDate: action.date,
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

  const dateValidation = useDateValidation({
    disabledDays,
    validationMessage,
    onValidate,
  })

  const validateDate = (
    date: DateOrUndefined,
    inputValue: string
  ): DateOrUndefined => {
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

  const handleDateChange = (date: DateOrUndefined): void => {
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
      validateDate(date, state.inputValue)

      dispatch({
        type: "update_selected_date",
        date,
      })

      dispatch({
        type: "navigate_months",
        date,
      })

      handleDateChange(date)
    },
    ...inputProps,
  })

  const handleInputChange = (inputValue: string): void => {}

  const handleCalendarSelect: CalendarSingleProps["onSelect"] = date => {
    const inputValue = transformDateToInputValue(date, disabledDays, locale)
    const newDate = validateDate(date, inputValue)

    dispatch({
      type: "update_input_field",
      inputValue,
    })

    dispatch({
      type: "update_selected_date",
      date: newDate,
    })

    dispatch({
      type: "navigate_months",
      date: newDate,
    })

    onDateChange(date)

    if (date && !isInvalidDate(date)) {
      onDateSubmit?.(date)
    }
  }

  useEffect(() => {
    const inputValue = transformDateToInputValue(
      selectedDate,
      disabledDays,
      locale
    )

    validateDate(selectedDate, inputValue)
  }, [])

  useEffect(() => {
    console.info("state", state)
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
