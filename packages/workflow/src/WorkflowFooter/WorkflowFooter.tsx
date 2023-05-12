import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import {
  FooterRoot,
  FooterAction,
  ProgressStepper,
  ProgressStepperProps,
} from "./components"

export interface WorkflowFooterProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLElement>, "children">>,
    ProgressStepperProps {
  /** An action the return to a previous step */
  previousAction?: JSX.Element
  /** An action the progress to the next step */
  nextAction?: JSX.Element
}

export const WorkflowFooter = ({
  steps,
  stepName,
  isComplete,
  previousAction,
  nextAction,
  ...restProps
}: WorkflowFooterProps): JSX.Element => (
  <FooterRoot {...restProps}>
    <FooterAction action={previousAction} />
    <ProgressStepper
      steps={steps}
      stepName={stepName}
      isComplete={isComplete}
    />
    <FooterAction action={nextAction} alignTo="End" />
  </FooterRoot>
)

WorkflowFooter.displayName = "WorkflowFooter"
