import classnames from "classnames"
import * as React from "react"
import { Label } from "../index"

import styles from "../../styles/CheckboxGroup.module.scss"

export type CheckboxGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  noBottomMargin?: boolean
}

type CheckboxGroup = React.FunctionComponent<CheckboxGroupProps>

const CheckboxGroup: CheckboxGroup = ({
  automationId,
  children,
  labelText,
  noBottomMargin = false,
}) => (
  <div
    data-automation-id={automationId && `${automationId}-field-checkbox-group`}
    className={classnames(styles.checkboxGroupContainer, {
      [styles.noBottomMargin]: noBottomMargin,
    })}
  >
    <div className={styles.checkboxGroupLabel}>
      <Label
        automationId={`${automationId}-field-label`}
        labelText={labelText}
        labelType="text"
      />
    </div>
    {children}
  </div>
)

export default CheckboxGroup
