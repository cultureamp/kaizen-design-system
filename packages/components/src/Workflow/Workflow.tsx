import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  Footer,
  FooterProps,
  Header,
  Main,
  HeaderProps,
  ProgressStepper,
  Wrapper,
} from "./subcomponents"

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
  <Workflow.Wrapper classNameOverride={classNameOverride} {...restProps}>
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
  </Workflow.Wrapper>
)

/**
 * @deprecated Use { Workflow } from `@kaizen/components/future`
 */
export const Workflow = Object.assign(WorkflowComponent, {
  Header,
  Footer,
  Main,
  ProgressStepper,
  Wrapper,
})
