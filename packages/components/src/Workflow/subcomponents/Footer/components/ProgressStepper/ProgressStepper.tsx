import React from "react"
import classnames from "classnames"
import {
  IndicatorActiveIcon,
  IndicatorInactiveIcon,
  SuccessIcon,
} from "~components/Icon"
import { Text } from "~components/Text"
import styles from "./ProgressStepper.module.scss"

export type ProgressStepperProps = {
  stepName: string
  steps: [string, ...string[]]
  isComplete?: boolean
}

const getStepStatus = (
  isComplete: boolean,
  isCurrentStep: boolean,
  step: string,
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
      accessibleName: `Completed: ${step}`,
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
      accessibleName: `Current: ${step}`,
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
          const { accessibleName, icon: Icon } = getStepStatus(
            isCompletedStep,
            isCurrentStep,
            step,
            index
          )
          return (
            <li
              className={styles.step}
              key={`${index}-${step}`}
              aria-current={isCurrentStep}
            >
              <div className={styles.stepContent}>
                <span className="kz-sr-only">
                  {/* will need to be translated */}
                  {accessibleName}
                </span>
                <Text
                  classNameOverride={styles.stepName}
                  variant="small"
                  color="white"
                  aria-hidden
                >
                  {step}
                </Text>
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
      <Text
        classNameOverride={styles.stepperDescription}
        variant="small"
        color="white"
        id="stepper-description"
      >
        Step {currentStepIndex + 1} of {steps.length}
      </Text>
    </div>
  )
}

ProgressStepper.displayName = "Workflow.ProgressStepper"
