import classnames from "classnames"
import { withDeprecatedComponent } from "@kaizen/react-deprecate-warning"
import * as React from "react"

import { Label } from "@kaizen/draft-form"

import styles from "./styles.scss"

export type RadioGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  noBottomMargin?: boolean
}

type RadioGroup = React.FunctionComponent<RadioGroupProps>

const RadioGroup: RadioGroup = ({
  automationId = "",
  children,
  labelText = "",
  noBottomMargin = false,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.radioGroupContainer, {
      [styles.noBottomMargin]: noBottomMargin,
    })}
  >
    <div className={styles.radioGroupLabel}>
      <Label
        automationId={`${automationId}-field-label`}
        labelText={labelText}
        labelType="text"
      />
    </div>
    {children}
  </div>
)

export default withDeprecatedComponent(RadioGroup, {
  warning:
    "This component is deprecated, use the RadioGroup available in @kaizen/draft-form instead.",
})
