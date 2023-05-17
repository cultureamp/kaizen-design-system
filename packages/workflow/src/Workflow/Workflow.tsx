import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import {
  WorkflowFooter,
  WorkflowFooterProps,
  WorkflowHeader,
  WorkflowHeaderProps,
} from "../../"

export type WorkflowProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  WorkflowFooterProps &
  WorkflowHeaderProps

export const Workflow = ({
  stepName,
  steps,
  isComplete,
  workflowName,
  status,
  actions,
  children,
  nextAction,
  previousAction,
  classNameOverride,
  ...restProps
}: WorkflowProps): JSX.Element => (
  <div className={classnames([classNameOverride])} {...restProps}>
    <WorkflowHeader
      workflowName={workflowName}
      stepName={stepName}
      status={status}
      actions={actions}
    />
    <main>{children}</main>
    <WorkflowFooter
      stepName={stepName}
      steps={steps}
      isComplete={isComplete}
      nextAction={nextAction}
      previousAction={previousAction}
    />
  </div>
)

Workflow.displayName = "Workflow"
