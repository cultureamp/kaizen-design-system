import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Label } from "../Primitives"
import styles from "./styles.scss"

export interface CheckboxGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: React.ReactNode
  labelText: string | React.ReactNode
  noBottomMargin?: boolean
  reversed?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const CheckboxGroup: React.VFC<CheckboxGroupProps> = ({
  children,
  labelText,
  noBottomMargin = false,
  reversed = false,
  automationId,
  classNameOverride,
  ...restProps
}) => (
  <div
    data-automation-id={automationId && `${automationId}-field-checkbox-group`}
    className={classnames(styles.checkboxGroupContainer, classNameOverride, {
      [styles.noBottomMargin]: noBottomMargin,
      [styles.reversed]: reversed,
    })}
    {...restProps}
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

CheckboxGroup.displayName = "CheckboxGroup"
