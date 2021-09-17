import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import { Paragraph } from "@kaizen/component-library"
import styles from "./styles.scss"

export interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: number
  labelLow?: ReactNode
  labelHigh?: ReactNode
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
    ...genericInputProps
  } = props

  const [step, setStep] = useState(0.5) // Let the dot center between the notch initially

  return (
    <div>
      <input
        className={styles.ratingScaleRange}
        type="range"
        min="1"
        max="10"
        step={step}
        defaultValue={defaultValue}
        value={value}
        aria-valuenow={value}
        aria-valuemin={1}
        aria-valuemax={10}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStep(1) // Put the stepper to 1 to avoid floating value
          onChange && onChange(e)
        }}
        {...genericInputProps}
      />
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
