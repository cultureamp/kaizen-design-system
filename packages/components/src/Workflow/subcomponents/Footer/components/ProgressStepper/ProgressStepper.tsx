import React from 'react'
import classnames from 'classnames'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { Icon } from '~components/__next__/Icon'
import styles from './ProgressStepper.module.css'

export type Step = {
  id: string
  label: string
}

export type Steps = [Step, ...Step[]]

export type ProgressStepperProps = {
  /** The id reference to within a Step object */
  currentStepId: Step['id']
  /** A non-empty array of Steps */
  steps: Steps
  isComplete?: boolean
}

const getStepStatus = (
  isComplete: boolean,
  isCurrentStep: boolean,
  step: Step,
  index: number,
): {
  icon: JSX.Element
  accessibleName: string
} => {
  if (isComplete) {
    return {
      icon: <Icon key={index} name="check_circle" isPresentational isFilled />,
      accessibleName: `Completed: ${step.label}`,
    }
  }
  if (isCurrentStep) {
    return {
      icon: <Icon key={index} name="radio_button_checked" isPresentational />,
      accessibleName: `Current: ${step.label}`,
    }
  }
  return {
    icon: <Icon key={index} name="radio_button_unchecked" isPresentational />,
    accessibleName: `Not started: ${step.label}`,
  }
}

export const ProgressStepper = ({
  currentStepId,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps): JSX.Element => {
  const currentStepIndex = steps.findIndex((stepItem) => stepItem.id === currentStepId)

  return (
    <div className={styles.stepsContainer}>
      <ol className={styles.stepList} {...restprops} aria-labelledby="stepper-description">
        {steps.map((step, index: number) => {
          const isCurrentStep = currentStepIndex === index
          const isCompletedStep = index < currentStepIndex || isComplete
          const { accessibleName, icon } = getStepStatus(
            isCompletedStep,
            isCurrentStep,
            step,
            index,
          )
          return (
            <li className={styles.step} key={`${step.id}`} aria-current={isCurrentStep}>
              <div className={styles.stepContent}>
                <VisuallyHidden>
                  {/* will need to be translated */}
                  {accessibleName}
                </VisuallyHidden>
                <span
                  className={classnames(styles.stepName, {
                    [styles.isCurrent]: isCurrentStep,
                  })}
                  aria-hidden
                >
                  {step.label}
                </span>
                <div className={styles.stepIndicator}>
                  <span
                    className={classnames(styles.stepIcon, {
                      [styles.isCompleted]: isCompletedStep,
                    })}
                  >
                    {icon}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={classnames([
                      styles.stepDivider,
                      isCompletedStep && styles.completedStep,
                    ])}
                  />
                )}
              </div>
            </li>
          )
        })}
      </ol>
      <span className={styles.stepperDescription} id="stepper-description">
        Step {currentStepIndex + 1} of {steps.length}
      </span>
    </div>
  )
}

ProgressStepper.displayName = 'Workflow.ProgressStepper'
