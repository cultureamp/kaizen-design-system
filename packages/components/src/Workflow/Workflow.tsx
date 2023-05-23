import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { Footer, FooterProps, Header, Main, HeaderProps } from "./"
import styles from "./Workflow.module.scss"

export type WorkflowProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  FooterProps &
  HeaderProps

export const Workflow = ({
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
    <Header
      workflowName={workflowName}
      stepName={stepName}
      status={status}
      headerActions={headerActions}
    />
    <Main>{children}</Main>
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
