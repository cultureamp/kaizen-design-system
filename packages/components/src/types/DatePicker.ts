import { StringSuggestions } from "./StringSuggestions"

export type FilterDateSupportedLocales = StringSuggestions<"en-US" | "en-AU">

// TODO: Remove when Date Picker is migrated to KAIO
export type { DateRange, DisabledDays } from "@kaizen/date-picker"
