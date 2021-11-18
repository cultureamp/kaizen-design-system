import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

type LabelType = "text" | "checkbox" | "toggle" | "radio"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  automationId?: string
  labelText?: string | React.ReactNode
  labelPosition?: "start" | "end"
  labelType?: LabelType
  reversed?: boolean
  variant?: "default" | "prominent"
  disabled?: boolean
}

const Label: React.FunctionComponent<LabelProps> = React.forwardRef(
  (
    {
      id,
      automationId,
      htmlFor,
      labelText = "",
      labelType = "text",
      labelPosition = "end",
      reversed = false,
      variant = "default",
      children,
      disabled,
    },
    ref
  ) => (
    <label
      id={id}
      data-automation-id={automationId}
      htmlFor={htmlFor}
      ref={ref}
      className={classnames(styles.label, {
        [styles.reversed]: reversed,
        [styles.text]: labelType === "text",
        [styles.checkbox]: labelType === "checkbox",
        [styles.toggle]: labelType === "toggle",
        [styles.radio]: labelType === "radio",
        [styles.prominent]: variant === "prominent",
        [styles.disabled]: disabled,
      })}
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
)

export default Label
