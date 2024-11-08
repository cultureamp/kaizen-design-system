// Allows any string value, but will have intellisense for values provided in the generic.
export type StringSuggestions<T extends string> =
  | T
  | (string & Record<never, never>)
