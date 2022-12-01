import { formatDateAsNumeral } from "../../utils/formatDateAsNumeral"

export type DateRangeInputFocusHandlerArgs = {
  date: Date | undefined
  onNewInputValue: (value: string) => void
  locale: Locale
}

export const handleDateRangeInputFocus = ({
  date,
  onNewInputValue,
  locale,
}: DateRangeInputFocusHandlerArgs): void => {
  if (date) {
    const newInputValue = formatDateAsNumeral(date, locale)
    onNewInputValue(newInputValue)
  }
}
