import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  FooterRoot,
  FooterAction,
  ProgressStepper,
  ProgressStepperProps,
} from "./"

export interface FooterProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLElement>, "children">>,
    ProgressStepperProps {
  /** An action the return to a previous step */
  previousAction?: JSX.Element
  /** An action the progress to the next step */
  nextAction?: JSX.Element
}

export const Footer = ({
  steps,
  stepName,
  isComplete,
  previousAction,
  nextAction,
  ...restProps
}: FooterProps): JSX.Element => (
  <FooterRoot {...restProps}>
    <FooterAction action={previousAction} actionType="Previous" />
    <ProgressStepper
      steps={steps}
      stepName={stepName}
      isComplete={isComplete}
    />
    <FooterAction action={nextAction} actionType="Next" />
  </FooterRoot>
)

Footer.displayName = "Footer"
