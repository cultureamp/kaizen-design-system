import {
  DateInputProps,
  formatDateAsText,
  isInvalidDate,
} from "@kaizen/date-picker"
import { formatDateAsNumeral } from "@kaizen/date-picker/src/utils/formatDateAsNumeral"
import { isDisabledDate } from "@kaizen/date-picker/src/utils/isDisabledDate"
import { isSelectingDayInCalendar } from "@kaizen/date-picker/src/utils/isSelectingDayInCalendar"
import { parseDateFromNumeralFormatValue } from "@kaizen/date-picker/src/utils/parseDateFromNumeralFormatValue"
import { parseDateFromTextFormatValue } from "@kaizen/date-picker/src/utils/parseDateFromTextFormatValue"
import { DisabledDays } from "~types/DatePicker"

type UseDateInputHandlersArgs = {
  locale: Locale
  disabledDays?: DisabledDays
  setInputValue: (value: string) => void
  onDateChange: (date: Date | undefined) => void
  onDateSubmit?: (date: Date) => void
  onChange?: DateInputProps["onChange"]
  onFocus?: DateInputProps["onFocus"]
  onBlur?: DateInputProps["onBlur"]
  onKeyDown?: DateInputProps["onKeyDown"]
}

type UseDateInputHandlersValue = {
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
  onDateSubmit,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}: UseDateInputHandlersArgs): UseDateInputHandlersValue => {
  const isValidDate = (date: Date): boolean =>
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

    if (e.currentTarget.value === "") {
      onDateChange(undefined)
      onBlur?.(e)
      return
    }

    const date = parseDateFromNumeralFormatValue(e.currentTarget.value, locale)

    if (isValidDate(date)) {
      const newInputValue = formatDateAsText(date, disabledDays, locale)
      setInputValue(newInputValue)
    }

    onDateChange(date)
    onBlur?.(e)
  }

  const handleKeyDown: DateInputProps["onKeyDown"] = e => {
    if (e.key === "Enter") {
      e.preventDefault()
      const date = parseDateFromNumeralFormatValue(
        e.currentTarget.value,
        locale
      )
      onDateChange(date)
      onDateSubmit?.(date)
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
