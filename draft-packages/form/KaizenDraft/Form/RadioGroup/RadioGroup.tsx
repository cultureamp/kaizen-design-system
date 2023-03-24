import React, { useState, HTMLAttributes } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { OverrideClassName } from "@kaizen/component-base"
import { Label } from "../Primitives"
import styles from "./RadioGroup.module.scss"

export interface RadioGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: React.ReactNode
  labelText: string | React.ReactNode
  labelId?: string
  noBottomMargin?: boolean
  reversed?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const RadioGroup = ({
  children,
  labelId: propsLabelId,
  labelText,
  noBottomMargin = false,
  reversed = false,
  automationId = "",
  classNameOverride,
  ...restProps
}: RadioGroupProps): JSX.Element => {
  const [labelId] = useState<string>(propsLabelId || v4())
  return (
    <div
      data-automation-id={automationId}
      className={classnames(styles.radioGroupContainer, classNameOverride, {
        [styles.noBottomMargin]: noBottomMargin,
        [styles.reversed]: reversed,
      })}
      role="radiogroup"
      aria-labelledby={labelId}
      {...restProps}
    >
      <div className={styles.radioGroupLabel}>
        <Label
          id={labelId}
          automationId={automationId && `${automationId}-field-label`}
          labelText={labelText}
          labelType="text"
          reversed={reversed}
        />
      </div>
      {children}
    </div>
  )
}

RadioGroup.displayName = "RadioGroup"
