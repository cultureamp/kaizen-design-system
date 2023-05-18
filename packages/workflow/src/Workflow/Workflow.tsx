import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Footer, FooterProps, Header, HeaderProps } from "../../"

export type WorkflowProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  FooterProps &
  HeaderProps

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
    <Header
      workflowName={workflowName}
      stepName={stepName}
      status={status}
      actions={actions}
    />
    <main>{children}</main>
    <Footer
      stepName={stepName}
      steps={steps}
      isComplete={isComplete}
      nextAction={nextAction}
      previousAction={previousAction}
    />
  </div>
)

Workflow.displayName = "Workflow"
