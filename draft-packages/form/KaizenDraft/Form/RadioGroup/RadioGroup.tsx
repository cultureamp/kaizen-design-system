import React, { HTMLAttributes } from "react"
import classnames from "classnames"
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
  labelText,
  labelId,
  noBottomMargin = false,
  reversed = false,
  automationId = "",
  classNameOverride,
  ...restProps
}: RadioGroupProps): JSX.Element => (
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
        automationId={`${automationId}-field-label`}
        labelText={labelText}
        labelType="text"
        reversed={reversed}
      />
    </div>
    {children}
  </div>
)

RadioGroup.displayName = "RadioGroup"
