import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import { Paragraph } from "@kaizen/component-library"
import classnames from "classnames"
import styles from "./styles.scss"

export interface InputRangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  value?: number
  labelLow?: ReactNode
  labelHigh?: ReactNode
  classNameAndIHaveSpokenToDST?: string
}

const InputRange: React.FunctionComponent<InputRangeProps> = (
  props: InputRangeProps
) => {
  const {
    defaultValue = 5.5,
    value,
    labelLow = "Not at all",
    labelHigh = "Very",
    onChange,
    "aria-describedby": ariaDescribedby,
    classNameAndIHaveSpokenToDST,
    ...genericInputProps
  } = props

  const [step, setStep] = useState(0.5) // Let the dot center between the notch initially
  const min = 1
  const max = 10

  return (
    <div>
      <input
        className={classnames(
          styles.ratingScaleRange,
          classNameAndIHaveSpokenToDST
        )}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={value ? undefined : defaultValue}
        value={value}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-describedby={`${genericInputProps.id}-helper ${
          ariaDescribedby ? ariaDescribedby : ""
        } `}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStep(1) // Put the stepper to 1 to avoid floating value
          onChange && onChange(e)
        }}
        {...genericInputProps}
      />
      <div
        className={styles.visuallyHidden}
        id={`${genericInputProps.id}-helper`}
      >
        {min} is {labelLow}, {max} is {labelHigh}
      </div>
      <div className={styles.labelsContainer}>
        <div className={styles.sliderLabels}>
          <Paragraph
            variant="extra-small"
            color="dark-reduced-opacity"
            tag="span"
          >
            {labelLow}
          </Paragraph>
          <Paragraph
            variant="extra-small"
            color="dark-reduced-opacity"
            tag="span"
          >
            {labelHigh}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default InputRange
