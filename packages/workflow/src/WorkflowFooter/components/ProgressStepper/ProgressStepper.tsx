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

export const ProgressStepper = ({
  stepName,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps): JSX.Element => {
  const currentStepIndex = steps.indexOf(stepName)

  return (
    <div className={styles.stepContainer}>
      <Paragraph
        classNameOverride={styles.stepperDescription}
        variant={"small"}
        color={"white"}
        id="stepper-description"
      >
        Step {currentStepIndex + 1} out of {steps.length}
      </Paragraph>
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
                <Paragraph
                  classNameOverride={styles.stepName}
                  variant={"small"}
                  color={"white"}
                >
                  {
                    <span className="sr-only">
                      {/* will need to be translated */}
                      {isCompletedStep
                        ? `Completed: ${step}`
                        : `In progress: ${step}`}
                    </span>
                  }
                  <span className={styles.stepDisplayName} aria-hidden>
                    {step}
                  </span>
                </Paragraph>
                <div
                  className={classnames({
                    [styles.stepIndicator]: true,
                    [styles.stepActive]: isCurrentStep || isCompletedStep,
                    [styles.completedStep]: isCompletedStep,
                  })}
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
    </div>
  )
}
