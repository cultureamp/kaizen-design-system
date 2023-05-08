import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"

export type WorkflowRootProps = OverrideClassName<
  HTMLAttributes<HTMLDivElement>
>

export const Root = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowRootProps): JSX.Element => (
  <div
    className={classnames(
      "flex grow-1 w-100 items-start justify-center p-24 text-center shadow-sm",
      classNameOverride
    )}
    {...restProps}
  >
    {children}
  </div>
)

Root.displayName = "Root"
