import React from "react"
import classnames from "classnames"
import { Paragraph } from "@kaizen/typography"
import { IndicatorActiveIcon } from "~icons/IndicatorActiveIcon"
import { IndicatorInactiveIcon } from "~icons/IndicatorInactiveIcon"
import { SuccessIcon } from "~icons/SuccessIcon"
import styles from "./ProgressStepper.module.scss"

export interface ProgressStepperProps {
  stepName: string
  steps: [string, ...string[]]
  isComplete?: boolean
}

const getStepStatus = (
  isComplete: boolean,
  isCurrentStep: boolean,
  step: string
): {
  icon: React.SVGAttributes<SVGSymbolElement>
  accessibleName: string
} => {
  if (isComplete) {
    return {
      icon: <SuccessIcon inheritSize role="presentation" />,
      accessibleName: `Completed: ${step}`,
    }
  }
  if (isCurrentStep) {
    return {
      icon: <IndicatorActiveIcon inheritSize role="presentation" />,
      accessibleName: `Current: ${step}`,
    }
  }
  return {
    icon: <IndicatorInactiveIcon inheritSize role="presentation" />,
    accessibleName: `Not started: ${step}`,
  }
}

export const ProgressStepper = ({
  stepName,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps): JSX.Element => {
  const currentStepIndex = steps.indexOf(stepName)

  return (
    <div className={styles.stepsContainer}>
      <ol
        className={styles.stepList}
        {...restprops}
        aria-labelledby="stepper-description"
      >
        {steps.map((step: string, index: number) => {
          const isCurrentStep = currentStepIndex === index
          const isCompletedStep = index < currentStepIndex || isComplete
          const stepStatus = getStepStatus(isCompletedStep, isCurrentStep, step)
          return (
            <li
              className={styles.step}
              key={`${index}-${step}`}
              aria-current={isCurrentStep}
            >
              <div className={styles.stepContent}>
                <span className="sr-only">
                  {/* will need to be translated */}
                  {stepStatus.accessibleName}
                </span>
                <Paragraph
                  classNameOverride={styles.stepName}
                  variant="small"
                  color="white"
                  aria-hidden
                >
                  {step}
                </Paragraph>
                <div className={styles.stepIndicator}>
                  <span className={styles.stepIcon}>
                    <>{stepStatus.icon}</>
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
