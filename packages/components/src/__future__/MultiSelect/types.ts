import { FieldMessageStatus } from "~components/FieldMessage"

export type MultiSelectOption = {
  label: string
  // Used for "value" attribute in option - must be unique
  value: string | number
}

export type ValidationMessage = {
  status?: Extract<FieldMessageStatus, "error" | "caution">
  message: string | React.ReactElement
}
