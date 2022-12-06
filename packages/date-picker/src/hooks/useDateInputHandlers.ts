import { Dispatch, SetStateAction } from "react"
import { DateInputProps } from "../_subcomponents/DateInput"
import { Matcher } from "../types"
import { formatDateAsNumeral } from "../utils/formatDateAsNumeral"
import { formatDateAsText } from "../utils/formatDateAsText"
import { isDisabledDate } from "../utils/isDisabledDate"
import { isInvalidDate } from "../utils/isInvalidDate"
import { isSelectingDayInCalendar } from "../utils/isSelectingDayInCalendar"
import { parseDateFromNumeralFormatValue } from "../utils/parseDateFromNumeralFormatValue"
import { parseDateFromTextFormatValue } from "../utils/parseDateFromTextFormatValue"

export type UseDateInputHandlersArgs = {
  locale: Locale
  disabledDays: Matcher[] | undefined
  setInputValue: Dispatch<SetStateAction<DateInputProps["value"]>>
  onDateChange: (date: Date | undefined) => void
  onChange?: DateInputProps["onChange"]
  onFocus?: DateInputProps["onFocus"]
  onBlur?: DateInputProps["onBlur"]
  onKeyDown?: DateInputProps["onKeyDown"]
}

export type UseDateInputHandlersValue = {
  onChange: DateInputProps["onChange"]
  onFocus: DateInputProps["onFocus"]
  onBlur: DateInputProps["onBlur"]
  onKeyDown: DateInputProps["onKeyDown"]
}

export const useDateInputHandlers = ({
  locale,
  disabledDays,
  setInputValue,
  onDateChange,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}: UseDateInputHandlersArgs): UseDateInputHandlersValue => {
  const isValidDate = (date: Date) =>
    !isInvalidDate(date) && !isDisabledDate(date, disabledDays)

  const handleChange: DateInputProps["onChange"] = e => {
    setInputValue(e.currentTarget.value)
    onChange?.(e)
  }

  const handleFocus: DateInputProps["onFocus"] = e => {
    const date = parseDateFromTextFormatValue(e.currentTarget.value, locale)
    if (!isInvalidDate(date)) {
      const newInputValue = formatDateAsNumeral(date, locale)
      setInputValue(newInputValue)
    }
    onFocus?.(e)
  }

  const handleBlur: DateInputProps["onBlur"] = e => {
    if (isSelectingDayInCalendar(e.relatedTarget)) return

    const date = parseDateFromNumeralFormatValue(e.currentTarget.value, locale)

    if (isValidDate(date)) {
      const newInputValue = formatDateAsText(date, disabledDays, locale)
      setInputValue(newInputValue)
      onDateChange(date)
      onBlur?.(e)
      return
    }

    onDateChange(undefined)
    onBlur?.(e)
  }

  const handleKeyDown: DateInputProps["onKeyDown"] = e => {
    if (e.key === "Enter") {
      const date = parseDateFromNumeralFormatValue(
        e.currentTarget.value,
        locale
      )
      onDateChange(isValidDate(date) ? date : undefined)
    }
    onKeyDown?.(e)
  }

  return {
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
  }
}
