import React, { PropsWithChildren, HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"

export type WorkflowMainProps = PropsWithChildren<
  OverrideClassName<HTMLAttributes<HTMLDivElement>>
>

/** A wrapper for the exit trigger (and other) actions of the Header Workflow  */
export const Main = ({
  children,
  classNameOverride,
  ...restProps
}: WorkflowMainProps): JSX.Element => (
  <main className={classNameOverride} {...restProps}>
    {children}
  </main>
)

Main.displayName = "Main"
