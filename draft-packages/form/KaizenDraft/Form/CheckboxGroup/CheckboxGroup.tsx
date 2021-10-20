import classnames from "classnames"
import * as React from "react"
import { Label } from "../index"

import styles from "./styles.scss"

export type CheckboxGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  noBottomMargin?: boolean
  reversed?: boolean
}

type CheckboxGroup = React.FunctionComponent<CheckboxGroupProps>

const CheckboxGroup: CheckboxGroup = ({
  automationId,
  children,
  labelText,
  noBottomMargin = false,
  reversed = false,
}) => (
  <div
    data-automation-id={automationId && `${automationId}-field-checkbox-group`}
    className={classnames(styles.checkboxGroupContainer, {
      [styles.noBottomMargin]: noBottomMargin,
      [styles.reversed]: reversed,
    })}
  >
    <div className={styles.checkboxGroupLabel}>
      <Label
        automationId={`${automationId}-field-label`}
        labelText={labelText}
        labelType="text"
        reversed={reversed}
      />
    </div>
    {children}
  </div>
)

export default CheckboxGroup
