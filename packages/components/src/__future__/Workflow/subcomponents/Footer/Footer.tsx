import React from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  FooterRoot,
  FooterAction,
  ProgressStepper,
  ProgressStepperProps,
  FooterRootProps,
} from "./components"

export type FooterProps = {
  /** An action to return to a previous step */
  previousAction?: JSX.Element
  /** An action to progress to the next step or submit the form */
  nextAction?: JSX.Element
} & ProgressStepperProps &
  OverrideClassName<Omit<FooterRootProps, "children">>

export const Footer = ({
  steps,
  currentStepId,
  isComplete,
  previousAction,
  nextAction,
  ...restProps
}: FooterProps): JSX.Element => (
  <FooterRoot {...restProps}>
    <FooterAction action={previousAction} actionType="Previous" />
    <ProgressStepper
      steps={steps}
      currentStepId={currentStepId}
      isComplete={isComplete}
    />
    <FooterAction action={nextAction} actionType="Next" />
  </FooterRoot>
)

Footer.displayName = "Workflow.Footer"
