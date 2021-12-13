import classnames from "classnames"
import * as React from "react"

import { Label } from "../index"

import styles from "./styles.scss"

export type RadioGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  labelId?: string
  noBottomMargin?: boolean
  reversed?: boolean
}

const RadioGroup: React.FunctionComponent<RadioGroupProps> = ({
  automationId = "",
  children,
  labelText = "",
  labelId,
  noBottomMargin = false,
  reversed = false,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.radioGroupContainer, {
      [styles.noBottomMargin]: noBottomMargin,
      [styles.reversed]: reversed,
    })}
    role="radiogroup"
    aria-labelledby={labelId}
  >
    <div className={styles.radioGroupLabel}>
      <Label
        id={labelId}
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
