import React from "react"
import { Input, InputProps, Label } from "@kaizen/draft-form"
import { isRefObject } from "../../utils/isRefObject"
import styles from "./DateInput.module.scss"

type OmittedInputProps =
  | "inputType"
  | "inputValue"
  | "reversed"
  | "type"
  | "ariaLabel"
  | "ariaDescribedBy"
  | "defaultInputValue"
  | "automationId"
  | "className" // This is deprecated in InputProps, but yet to be removed
  | "inputRef"

export interface DateInputProps extends Omit<InputProps, OmittedInputProps> {
  id: string
  labelText: React.ReactNode
  isReversed?: boolean
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ id, labelText, disabled, isReversed = false, ...inputProps }, ref) => (
    <div className={styles.dateInput}>
      <Label
        htmlFor={id}
        labelText={labelText}
        reversed={isReversed}
        disabled={disabled}
      />
      <Input
        inputRef={isRefObject(ref) ? ref : undefined}
        id={id}
        autoComplete="off"
        disabled={disabled}
        reversed={isReversed}
        {...inputProps}
      />
    </div>
  )
)
DateInput.displayName = "DateInput"
