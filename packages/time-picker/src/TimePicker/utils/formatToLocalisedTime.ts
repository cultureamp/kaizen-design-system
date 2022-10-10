import { ValueType } from "../types"

const DATE_FORMATTER_CONFIG = {
  timeStyle: "short",
} as Intl.DateTimeFormatOptions

export const formatToLocalisedTime = ({
  hour,
  minutes,
  locale,
}: ValueType & { locale: string }): string => {
  // Generates an arbitrary date to pass into Intl.DateTimeFormat as it only accepts full dates
  const date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    hour,
    minutes
  )
  return new Intl.DateTimeFormat(locale, {
    ...DATE_FORMATTER_CONFIG,
  }).format(date)
}
