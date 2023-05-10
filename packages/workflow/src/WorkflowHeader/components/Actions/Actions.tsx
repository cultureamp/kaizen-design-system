import React, { PropsWithChildren, HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"

export interface WorkflowActionsProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "children">> {
  actions?: JSX.Element[]
}

/** A wrapper for the exit trigger (and other) actions of the Header Workflow  */
export const Actions = ({
  actions,
  ...restProps
}: PropsWithChildren<WorkflowActionsProps>): JSX.Element => (
  <div className="flex grow-1 justify-end items-center" {...restProps}>
    {actions?.map(action => React.createElement(action.type, action.props))}
  </div>
)

Actions.displayName = "Actions"
