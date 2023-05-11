import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"

export type WorkflowHeaderRootProps = OverrideClassName<
  HTMLAttributes<HTMLHeadingElement>
>

export const HeaderRoot = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowHeaderRootProps): JSX.Element => (
  <header
    className={classnames(
      "flex grow-1 justify-center items-start p-24 text-center shadow-sm",
      classNameOverride
    )}
    {...restProps}
  >
    {children}
  </header>
)

HeaderRoot.displayName = "HeaderRoot"
