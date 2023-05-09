import React, {
  ReactNode,
  PropsWithChildren,
  HTMLAttributes,
  ComponentType,
} from "react"
import { OverrideClassName } from "@kaizen/component-base"
import { WorkflowExitProps } from "./WorkflowExit"

export interface WorkflowActionsProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">> {
  children?: ComponentType<WorkflowExitProps> | ReactNode
}

/** A wrapper for the exit trigger (and other) actions of the Header Workflow  */
export const Actions = ({
  children,
  ...restProps
}: PropsWithChildren<WorkflowActionsProps>): JSX.Element => (
  <div className="flex grow-1 justify-end items-center" {...restProps}>
    {children}
  </div>
)

Actions.displayName = "Actions"
