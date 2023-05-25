import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  Footer,
  FooterProps,
  Header,
  Main,
  HeaderProps,
  WorkflowExit,
  ProgressStepper,
} from "./subcomponents"
import styles from "./Workflow.module.scss"

export type WorkflowProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  FooterProps &
  HeaderProps

const WorkflowComponent = ({
  stepName,
  steps,
  isComplete,
  workflowName,
  status,
  headerActions,
  children,
  nextAction,
  previousAction,
  classNameOverride,
  ...restProps
}: WorkflowProps): JSX.Element => (
  <div
    className={classnames([styles.workflowWrapper, classNameOverride])}
    {...restProps}
  >
    <Workflow.Header
      workflowName={workflowName}
      stepName={stepName}
      status={status}
      headerActions={headerActions}
    />
    <Workflow.Main>{children}</Workflow.Main>
    <Workflow.Footer
      stepName={stepName}
      steps={steps}
      isComplete={isComplete}
      nextAction={nextAction}
      previousAction={previousAction}
    />
  </div>
)

export const Workflow = Object.assign(WorkflowComponent, {
  Header,
  Footer,
  Main,
  WorkflowExit,
  ProgressStepper,
})
