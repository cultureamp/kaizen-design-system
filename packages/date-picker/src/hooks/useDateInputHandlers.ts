import { Dispatch, SetStateAction } from "react"
import { DateInputProps } from "../_subcomponents/DateInput"
import { formatDateAsNumeral } from "../utils/formatDateAsNumeral"
import { isInvalidDate } from "../utils/isInvalidDate"
import { parseDateFromTextFormatValue } from "../utils/parseDateFromTextFormatValue"

export type UseDateInputHandlersArgs = {
  locale: Locale
  setInputValue: Dispatch<SetStateAction<DateInputProps["value"]>>
  onChange?: DateInputProps["onChange"]
  onFocus?: DateInputProps["onFocus"]
}

export type UseDateInputHandlersValue = {
  onChange: DateInputProps["onChange"]
  onFocus: DateInputProps["onFocus"]
}

export const useDateInputHandlers = ({
  locale,
  setInputValue,
  onChange,
  onFocus,
}: UseDateInputHandlersArgs): UseDateInputHandlersValue => {
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

  return {
    onChange: handleChange,
    onFocus: handleFocus,
  }
}
