import React, { Fragment } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import SuccessIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Paragraph } from "@kaizen/typography"
import styles from "./ProgressStepper.module.scss"

export interface ProgressStepperProps {
  currentStep: string
  steps: string[]
  isComplete?: boolean
}

export const ProgressStepper = ({
  currentStep,
  steps,
  isComplete = false,
  ...restprops
}: ProgressStepperProps): JSX.Element => {
  const currentStepIndex = steps.indexOf(currentStep)

  return (
    <div
      className={styles.stepContainer}
      {...restprops}
      aria-label={`This is step number: ${
        currentStepIndex + 1
      }. The total number of steps to complete is: ${steps.length}`}
    >
      {steps.map((step: string, index: number) => {
        const isCurrentStep = currentStepIndex === index
        const isCompletedStep = index < currentStepIndex || isComplete
        const isActiveStep = isCompletedStep || isCurrentStep
        // const isFirst = index === 0

        return (
          <Fragment key={`${index}-${step}`}>
            <div
              className={classnames({
                [styles.stepIndicator]: true,
                [styles.currentStep]: isCurrentStep,
                [styles.completedStep]: isCompletedStep,
              })}
            >
              {isCompletedStep && (
                <span className={styles.completedIcon}>
                  <Icon role={"presentation"} icon={SuccessIcon} inheritSize />
                </span>
              )}
              <Paragraph
                classNameOverride={styles.stepName}
                variant={"small"}
                color={isActiveStep ? "white" : "white-reduced-opacity"}
              >
                {step}
              </Paragraph>
            </div>
            {index < steps.length - 1 && (
              <div
                className={classnames([
                  styles.stepDivider,
                  isCompletedStep && styles.completedStep,
                ])}
              />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
