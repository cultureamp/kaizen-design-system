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
  Pick<HeaderProps, "workflowName" | "status" | "headerActions">

export const Workflow = ({
  steps,
  currentStepId,
  isComplete,
  workflowName,
  status,
  headerActions,
  children,
  nextAction,
  previousAction,
  classNameOverride,
  ...restProps
}: WorkflowProps): JSX.Element => {
  const currentStep = steps.find(step => step.id === currentStepId)
  return (
    <Workflow.Wrapper classNameOverride={classNameOverride} {...restProps}>
      <Workflow.Header
        workflowName={workflowName}
        stepName={currentStep!.label}
        status={status}
        headerActions={headerActions}
      />
      <Workflow.Main>{children}</Workflow.Main>
      <Workflow.Footer
        currentStepId={currentStepId}
        steps={steps}
        isComplete={isComplete}
        nextAction={nextAction}
        previousAction={previousAction}
      />
    </Workflow.Wrapper>
  )
}

Workflow.Header = Header;
Workflow.Footer = Footer;
Workflow.Main = Main;
Workflow.ProgressStepper = ProgressStepper;
Workflow.Wrapper = Wrapper;
