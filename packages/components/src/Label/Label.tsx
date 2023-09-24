import React, { LabelHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Label.module.scss"
type LabelType = "text" | "checkbox" | "toggle" | "radio"

export type LabelProps = OverrideClassName<
  LabelHTMLAttributes<HTMLLabelElement>
> & {
  children?: React.ReactNode
  labelText?: string | React.ReactNode
  labelType?: LabelType
  labelPosition?: "start" | "end"
  reversed?: boolean
  variant?: "default" | "prominent"
  disabled?: boolean
}

export const Label = ({
  children,
  labelText = "",
  labelType = "text",
  labelPosition = "end",
  reversed = false,
  variant = "default",
  disabled,
  classNameOverride,
  ...restProps
}: LabelProps): JSX.Element => (
  <label
    className={classnames(
      styles.label,
      classNameOverride,
      styles[labelType],
      reversed && styles.reversed,
      variant === "prominent" && styles.prominent,
      disabled && styles.disabled
    )}
    {...restProps}
  >
    {children}
    <span
      className={classnames(
        labelPosition === "start" && styles.prependedLabel,
        labelPosition === "end" && styles.appendedLabel
      )}
    >
      {labelText}
    </span>
  </label>
)

Label.displayName = "Label"
