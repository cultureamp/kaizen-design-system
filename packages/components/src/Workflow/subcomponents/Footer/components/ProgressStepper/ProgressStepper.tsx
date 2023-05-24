import React from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import emptyIcon from "@kaizen/component-library/icons/empty.icon.svg"
import fullIcon from "@kaizen/component-library/icons/full.icon.svg"
import SuccessIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Paragraph } from "@kaizen/typography"
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
): { icon: React.SVGAttributes<SVGSymbolElement>; accessibleName: string } => {
  if (isComplete) {
    return {
      icon: SuccessIcon,
      accessibleName: `Completed: ${step}`,
    }
  }
  if (isCurrentStep) {
    return {
      icon: fullIcon,
      accessibleName: `Current: ${step}`,
    }
  }
  return {
    icon: emptyIcon,
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
                    <Icon
                      role="presentation"
                      icon={stepStatus.icon}
                      inheritSize
                    />
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
        classNameOverride="sr-only"
        variant="small"
        color="white"
        id="stepper-description"
      >
        Step {currentStepIndex + 1} out of {steps.length}.
      </Paragraph>
    </div>
  )
}
