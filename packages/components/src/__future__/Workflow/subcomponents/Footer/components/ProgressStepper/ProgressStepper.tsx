import React from "react"
import classnames from "classnames"
import { Paragraph } from "@kaizen/typography"
import {
  IndicatorActiveIcon,
  IndicatorInactiveIcon,
  SuccessIcon,
} from "~components/Icon"
import styles from "./ProgressStepper.module.scss"

export type Step = {
  id: string
  label: string
}

export type Steps = [Step, ...Step[]]

export type ProgressStepperProps = {
  /** The id reference to within a Step object */
  currentStepId: Step["id"]
  /** A non-empty array of Steps */
  steps: Steps
  isComplete?: boolean
}

const getStepStatus = (
  isComplete: boolean,
  isCurrentStep: boolean,
  step: Step,
  index: number
): {
  icon: JSX.Element
  accessibleName: string
} => {
  if (isComplete) {
    return {
      icon: (
        <SuccessIcon
          key={index}
          inheritSize
          role="presentation"
          classNameOverride="success"
        />
      ),
      accessibleName: `Completed: ${step.label}`,
    }
  }
  if (isCurrentStep) {
    return {
      icon: (
        <IndicatorActiveIcon
          key={index}
          inheritSize
          role="presentation"
          classNameOverride="active"
        />
      ),
      accessibleName: `Current: ${step.label}`,
    }
  }
  return {
    icon: (
      <IndicatorInactiveIcon
        key={index}
        inheritSize
        classNameOverride="incomplete"
        role="presentation"
      />
    ),
    accessibleName: `Not started: ${step.label}`,
  }
}

export const ProgressStepper = ({
  currentStepId,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps): JSX.Element => {
  const currentStepIndex = steps.findIndex(
    stepItem => stepItem.id === currentStepId
  )

  return (
    <div className={styles.stepsContainer}>
      <ol
        className={styles.stepList}
        {...restprops}
        aria-labelledby="stepper-description"
      >
        {steps.map((step, index: number) => {
          const isCurrentStep = currentStepIndex === index
          const isCompletedStep = index < currentStepIndex || isComplete
          const { accessibleName, icon: Icon } = getStepStatus(
            isCompletedStep,
            isCurrentStep,
            step,
            index
          )
          return (
            <li
              className={styles.step}
              key={`${step.id}`}
              aria-current={isCurrentStep}
            >
              <div className={styles.stepContent}>
                <span className="sr-only">
                  {/* will need to be translated */}
                  {accessibleName}
                </span>
                <Paragraph
                  classNameOverride={styles.stepName}
                  variant="small"
                  color="white"
                  aria-hidden
                >
                  {step.label}
                </Paragraph>
                <div className={styles.stepIndicator}>
                  <span className={styles.stepIcon}>{Icon}</span>
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
      <Paragraph
        classNameOverride={styles.stepperDescription}
        variant="small"
        color="white"
        id="stepper-description"
      >
        Step {currentStepIndex + 1} of {steps.length}
      </Paragraph>
    </div>
  )
}

ProgressStepper.displayName = "Workflow.ProgressStepper"
