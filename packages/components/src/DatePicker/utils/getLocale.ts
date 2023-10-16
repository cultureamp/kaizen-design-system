import { enAU, enUS } from "date-fns/locale"
import { DatePickerSupportedLocales } from "../types"

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
