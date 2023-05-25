import React, { PropsWithChildren, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"

export type WorkflowMainProps = PropsWithChildren<
  OverrideClassName<HTMLAttributes<HTMLDivElement>>
>

/** A wrapper for the exit trigger (and other) actions of the Header Workflow  */
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
