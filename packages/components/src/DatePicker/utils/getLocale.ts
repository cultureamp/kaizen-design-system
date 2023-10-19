import { enAU, enUS } from "date-fns/locale"
import { StringSuggestions } from "~types/StringSuggestions"

// Ensure you update the storybook DATE_PICKER_SUPPORTED_LOCALES arg options when updating DatePickerSupportedLocales.
export type DatePickerSupportedLocales = StringSuggestions<"en-US" | "en-AU">

export const getLocale = (locale: DatePickerSupportedLocales): Locale => {
  switch (locale) {
    case "en-AU":
      return enAU
    case "en-US":
      return enUS
    default:
      return enAU
  }
}
