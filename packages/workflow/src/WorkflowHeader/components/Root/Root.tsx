import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"

export type WorkflowRootProps = OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>

export const Root = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowRootProps): JSX.Element => (
  <header
    className={classnames(
      "flex grow-1 w-100 justify-center items-start p-24 text-center shadow-sm",
      classNameOverride
    )}
    {...restProps}
  >
    {children}
  </header>
)

Root.displayName = "Root"
