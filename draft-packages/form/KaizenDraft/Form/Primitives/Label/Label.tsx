import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

type LabelType = "text" | "checkbox" | "toggle" | "radio"

export type LabelProps = {
  id?: string
  automationId?: string
  htmlFor?: string
  labelText?: string | React.ReactNode
  labelPosition?: "start" | "end"
  labelType?: LabelType
  reversed?: boolean
}

type Label = React.SFC<LabelProps>

const Label: Label = ({
  id,
  automationId,
  htmlFor,
  labelText = "",
  labelType = "text",
  labelPosition = "start",
  reversed = false,
  children,
}) => (
  <label
    id={id}
    data-automation-id={automationId}
    htmlFor={htmlFor}
    className={classnames(styles.label, {
      [styles.reversed]: reversed,
      [styles.text]: labelType === "text",
      [styles.checkbox]: labelType === "checkbox",
      [styles.toggle]: labelType === "toggle",
      [styles.radio]: labelType === "radio",
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

export default Label
