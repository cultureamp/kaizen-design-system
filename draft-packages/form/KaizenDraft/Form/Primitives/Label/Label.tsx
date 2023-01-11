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
    className={classnames(styles.label, classNameOverride, {
      [styles.reversed]: reversed,
      [styles.text]: labelType === "text",
      [styles.checkbox]: labelType === "checkbox",
      [styles.toggle]: labelType === "toggle",
      [styles.radio]: labelType === "radio",
      [styles.prominent]: variant === "prominent",
      [styles.disabled]: disabled,
    })}
    {...restProps}
  >
    {children}
    <span
      className={classnames({
        [styles.prependedLabel]: labelPosition === "start",
        [styles.appendedLabel]: labelPosition === "end",
      })}
    >
      {labelText}
    </span>
  </label>
)

Label.displayName = "Label"
