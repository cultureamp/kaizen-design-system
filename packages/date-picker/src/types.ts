export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined

// This isn't recommended TS behaviour, however since we have a fallback in place
// for handling other locales, we have a valid usage of suggesting supported locales.
type StringSuggestions<T> = T | (string & Record<never, never>)

export type SupportedLocales = StringSuggestions<"en-US" | "en-AU">
