import React, { type HTMLAttributes } from 'react'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import {
  Footer,
  Header,
  Main,
  ProgressStepper,
  Wrapper,
  type FooterProps,
  type HeaderProps,
} from './subcomponents'

export type WorkflowProps = OverrideClassName<HTMLAttributes<HTMLDivElement>> &
  FooterProps &
  Pick<HeaderProps, 'workflowName' | 'statusTag' | 'headerActions'>

export const Workflow = ({
  steps,
  currentStepId,
  isComplete,
  workflowName,
  statusTag,
  headerActions,
  children,
  nextAction,
  previousAction,
  classNameOverride,
  ...restProps
}: WorkflowProps): JSX.Element => {
  const currentStep = steps.find((step) => step.id === currentStepId)
  return (
    <Workflow.Wrapper classNameOverride={classNameOverride} {...restProps}>
      <Workflow.Header
        workflowName={workflowName}
        stepName={currentStep!.label}
        statusTag={statusTag}
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

Workflow.Header = Header
Workflow.Footer = Footer
Workflow.Main = Main
Workflow.ProgressStepper = ProgressStepper
Workflow.Wrapper = Wrapper
