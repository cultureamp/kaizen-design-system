import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
export interface FieldGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: React.ReactNode
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
  classNameOverride,
  className,
  automationId,
  ...restProps
}: FieldGroupProps): JSX.Element => (
  <div
    data-automation-id={automationId}
    className={classnames(className, classNameOverride)}
    {...restProps}
  >
    {children}
  </div>
)

FieldGroup.displayName = "FieldGroup"
