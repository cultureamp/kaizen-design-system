import { enAU, enUS } from "date-fns/locale"
import { SupportedLocales } from "../DatePicker"

export const getLocale = (locale: SupportedLocales): Locale => {
  switch (locale) {
    case "en-AU":
      return enAU
    case "en-US":
      return enUS
  }
}
