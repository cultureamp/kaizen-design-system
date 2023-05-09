import React, { LabelHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Label.module.scss"

type LabelType = "text" | "checkbox" | "toggle" | "radio"

export interface LabelProps
  extends OverrideClassName<LabelHTMLAttributes<HTMLLabelElement>> {
  children?: React.ReactNode
  labelText?: string | React.ReactNode
  labelType?: LabelType
  labelPosition?: "start" | "end"
  reversed?: boolean
  variant?: "default" | "prominent"
  disabled?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const Label = ({
  children,
  labelText = "",
  labelType = "text",
  labelPosition = "end",
  reversed = false,
  variant = "default",
  disabled,
  automationId,
  classNameOverride,
  ...restProps
}: LabelProps): JSX.Element => (
  <label
    data-automation-id={automationId}
    className={classnames(
      styles.label,
      classNameOverride,
      reversed && styles.reversed,
      labelType === "text" && styles.text,
      labelType === "checkbox" && styles.checkbox,
      labelType === "toggle" && styles.toggle,
      labelType === "radio" && styles.radio,
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
