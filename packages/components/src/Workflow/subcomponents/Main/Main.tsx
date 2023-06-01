import React, { HTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"

export type WorkflowMainProps = OverrideClassName<
  HTMLAttributes<HTMLDivElement>
> & {
  children: ReactNode
}

export const Main = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowMainProps): JSX.Element => (
  <main className={classnames([classNameOverride])} {...restProps}>
    {children}
  </main>
)

Main.displayName = "Workflow.Main"
