import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FieldGroup.module.scss"

export interface FieldGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: React.ReactNode
  inline?: boolean
  /**
   * **Deprecated:** Use `classNameOverride` instead
   * @deprecated
   */
  className?: string
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const FieldGroup = ({
  children,
  inline = false,
  classNameOverride,
  className,
  automationId,
  ...restProps
}: FieldGroupProps): JSX.Element => (
  <div
    data-automation-id={automationId}
    className={classnames(
      styles.group,
      className,
      classNameOverride,
      inline && styles.inline
    )}
    {...restProps}
  >
    {children}
  </div>
)

FieldGroup.displayName = "FieldGroup"
