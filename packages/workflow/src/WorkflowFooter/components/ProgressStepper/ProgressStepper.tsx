import React from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import SuccessIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Paragraph } from "@kaizen/typography"
import styles from "./ProgressStepper.module.scss"

export interface ProgressStepperProps {
  stepName: string
  steps: [string, ...string[]]
  isComplete?: boolean
}

const getA11yStepStatus = (
  isComplete: boolean,
  isCurrentStep: boolean,
  step: string
): string => {
  if (isComplete) {
    return `Completed: ${step}`
  }
  if (isCurrentStep) {
    return `Current: ${step}`
  }
  return `Not started: ${step}`
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
          return (
            <li
              className={styles.step}
              key={`${index}-${step}`}
              aria-current={isCurrentStep}
            >
              <div className={styles.stepContent}>
                <span className="sr-only">
                  {/* will need to be translated */}
                  {getA11yStepStatus(isCompletedStep, isCurrentStep, step)}
                </span>
                <Paragraph
                  classNameOverride={styles.stepName}
                  variant={"small"}
                  color={"white"}
                  aria-hidden
                >
                  {step}
                </Paragraph>
                <div
                  className={classnames([
                    styles.stepIndicator,
                    isCurrentStep && styles.stepCurrent,
                    isCompletedStep && styles.completedStep,
                  ])}
                >
                  {isCompletedStep && (
                    <span className={styles.completedIcon}>
                      <Icon
                        role={"presentation"}
                        icon={SuccessIcon}
                        inheritSize
                      />
                    </span>
                  )}
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
        classNameOverride="sr-only"
        variant={"small"}
        color={"white"}
        id="stepper-description"
      >
        Step {currentStepIndex + 1} out of {steps.length}.
      </Paragraph>
    </div>
  )
}
