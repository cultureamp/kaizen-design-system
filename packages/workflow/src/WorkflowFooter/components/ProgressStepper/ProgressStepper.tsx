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
    <ol
      className={styles.stepContainer}
      {...restprops}
      // will need to be translated
      aria-label={`This is step number: ${
        currentStepIndex + 1
      }. The total number of steps to complete is: ${steps.length}`}
    >
      {steps.map((step: string, index: number) => {
        const isCurrentStep = currentStepIndex === index
        const isCompletedStep = index < currentStepIndex || isComplete
        const isActiveStep = isCompletedStep || isCurrentStep
        return (
          <li
            className={styles.step}
            key={`${index}-${step}`}
            // aria-current="page"
          >
            <div
              className={classnames({
                [styles.stepIndicator]: true,
                [styles.stepActive]: isCurrentStep || isCompletedStep,
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
          </li>
        )
      })}
    </ol>
  )
}
