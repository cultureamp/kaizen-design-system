import type { Locale } from "date-fns"
import { enAU, enUS, frCA } from "date-fns/locale"
import { StringSuggestions } from "~types/StringSuggestions"

// Ensure you update the storybook DATE_PICKER_SUPPORTED_LOCALES arg options when updating DatePickerSupportedLocales.
export type DatePickerSupportedLocales = StringSuggestions<
  "en-US" | "en-AU" | "fr-CA"
>

export const getLocale = (locale: DatePickerSupportedLocales): Locale => {
  switch (locale) {
    case "en-AU":
      return enAU
    case "en-US":
      return enUS
    case "fr-CA":
      return frCA
    default:
      return enAU
  }
}
