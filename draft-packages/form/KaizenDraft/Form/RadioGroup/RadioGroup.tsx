import classnames from "classnames"
import * as React from "react"

import { Label } from "../index"

import styles from "./styles.scss"

export type RadioGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  noBottomMargin?: boolean
  reversed?: boolean
}

type RadioGroup = React.FunctionComponent<RadioGroupProps>

const RadioGroup: RadioGroup = ({
  automationId = "",
  children,
  labelText = "",
  noBottomMargin = false,
  reversed = false,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.radioGroupContainer, {
      [styles.noBottomMargin]: noBottomMargin,
      [styles.reversed]: reversed,
    })}
  >
    <div className={styles.radioGroupLabel}>
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

export default RadioGroup
