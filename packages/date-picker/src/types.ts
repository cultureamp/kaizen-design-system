import { FieldMessageStatus } from "@kaizen/draft-form"

export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined

// This isn't recommended TS behaviour, however since we have a fallback in place
// for handling other locales, we have a valid usage of suggesting supported locales.
type StringSuggestions<T> = T | (string & Record<never, never>)

// Ensure you update the storybook SUPPORTED_LOCALES arg options when updating SupportedLocales.
export type SupportedLocales = StringSuggestions<"en-US" | "en-AU">

export type ValidationResponse = {
  date?: Date
  inputValue?: string // Input value upon validation
  status?: FieldMessageStatus
  validationMessage?: string
  isDisabled: boolean
  isInvalid: boolean
  isEmpty: boolean
  isValidDate: boolean // A date is !isDisabled && !isInvalid && !isEmpty
}
