import React, { InputHTMLAttributes, ReactNode } from "react"
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
    defaultValue = 1,
    value,
    labelLow = "Not at all",
    labelHigh = "Very",
    ...genericInputProps
  } = props

  return (
    <div>
      <input
        className={styles.ratingScaleRange}
        type="range"
        min="1"
        max="10"
        step={1}
        defaultValue={defaultValue}
        value={value}
        aria-valuenow={value}
        aria-valuemin={1}
        aria-valuemax={10}
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
