import classnames from "classnames"
import * as React from "react"
import v4 from "uuid/v4"

import { Label } from "../index"

import styles from "./styles.scss"

export type RadioGroupProps = {
  automationId?: string
  labelText: string | React.ReactNode
  labelId?: string
  noBottomMargin?: boolean
  reversed?: boolean
}

type RadioGroup = React.FunctionComponent<RadioGroupProps>

const RadioGroup: RadioGroup = ({
  automationId = "",
  children,
  labelText = "",
  labelId,
  noBottomMargin = false,
  reversed = false,
}) => {
  const radioGroupId = React.useMemo(() => labelId || v4(), [])
  return (
    <div
      data-automation-id={automationId}
      className={classnames(styles.radioGroupContainer, {
        [styles.noBottomMargin]: noBottomMargin,
        [styles.reversed]: reversed,
      })}
      role="radiogroup"
      aria-labelledby={radioGroupId}
    >
      <div className={styles.radioGroupLabel}>
        <Label
          id={radioGroupId}
          automationId={`${automationId}-field-label`}
          labelText={labelText}
          labelType="text"
          reversed={reversed}
        />
      </div>
      {children}
    </div>
  )
}

export default RadioGroup
