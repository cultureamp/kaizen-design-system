import React from "react"
import classnames from "classnames"
import { Input, InputProps } from "~components/Input"
import { Label } from "~components/Label"
import { isRefObject } from "~utils/isRefObject"
import styles from "./DateInput.module.scss"

type OmittedInputProps = "reversed" | "type" | "inputRef"

export interface DateInputProps extends Omit<InputProps, OmittedInputProps> {
  labelText: React.ReactNode
  isReversed?: boolean
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      id,
      labelText,
      disabled,
      isReversed = false,
      classNameOverride,
      ...inputProps
    },
    ref
  ) => (
    <div className={classnames(styles.dateInput, classNameOverride)}>
      <Label
        htmlFor={id}
        labelText={labelText}
        reversed={isReversed}
        disabled={disabled}
      />
      <Input
        inputRef={isRefObject(ref) ? ref : undefined}
        id={id}
        type="text"
        autoComplete="off"
        classNameOverride={styles.input}
        disabled={disabled}
        reversed={isReversed}
        {...inputProps}
      />
    </div>
  )
)
DateInput.displayName = "DateInput"
