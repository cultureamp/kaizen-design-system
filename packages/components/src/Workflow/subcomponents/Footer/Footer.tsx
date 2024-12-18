import React from 'react'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import {
  FooterAction,
  FooterRoot,
  ProgressStepper,
  type FooterRootProps,
  type ProgressStepperProps,
} from './components'

export type FooterProps = {
  /** An action to return to a previous step */
  previousAction?: JSX.Element
  /** An action to progress to the next step or submit the form */
  nextAction?: JSX.Element
} & ProgressStepperProps &
  OverrideClassName<Omit<FooterRootProps, 'children'>>

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
    <ProgressStepper steps={steps} currentStepId={currentStepId} isComplete={isComplete} />
    <FooterAction action={nextAction} actionType="Next" />
  </FooterRoot>
)

Footer.displayName = 'Workflow.Footer'
