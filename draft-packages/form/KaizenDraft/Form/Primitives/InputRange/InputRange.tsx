import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import { Paragraph } from "@kaizen/component-library"
import classnames from "classnames"
import styles from "./styles.scss"

export interface InputRangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  value?: number
  min?: number
  max?: number
  minLabel?: ReactNode
  maxLabel?: ReactNode
  classNameAndIHaveSpokenToDST?: string
  showDisabledLabel?: boolean
  disabledLabel?: string
  ariaDescribedby?: string
}

const InputRange: React.FunctionComponent<InputRangeProps> = (
  props: InputRangeProps
) => {
  const {
    defaultValue = props.max ? (props.max + 1) / 2 : 5.5,
    value,
    minLabel = "Not at all",
    maxLabel = "Very",
    onChange,
    "aria-describedby": ariaDescribedby,
    classNameAndIHaveSpokenToDST,
    disabledLabel,
    disabled,
    min = 1,
    max = 10,
    ...genericInputProps
  } = props

  const [step, setStep] = useState(0.5) // Let the dot center between the notch initially

  const showDisabledLabel =
    disabled === true && disabledLabel !== undefined && disabledLabel !== ""

  return (
    <>
      <input
        className={classnames(
          styles.ratingScaleRange,
          classNameAndIHaveSpokenToDST
        )}
        disabled={disabled}
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
        }`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStep(1) // Put the stepper to 1 to avoid floating value
          onChange && onChange(e)
        }}
        {...genericInputProps}
      />
      <div className={styles.spokes}>
        {[...Array(max)].map(() => (
          <div className={styles.spokeContainer}>
            <div className={styles.spoke} />
          </div>
        ))}
      </div>
      <div
        className={styles.visuallyHidden}
        id={`${genericInputProps.id}-helper`}
      >
        {min} is {minLabel}, {max} is {maxLabel}
      </div>
      <div className={styles.labelsContainer}>
        {!showDisabledLabel && (
          <div className={styles.sliderLabels}>
            <Paragraph
              variant="extra-small"
              color="dark-reduced-opacity"
              tag="span"
            >
              {minLabel}
            </Paragraph>
            <Paragraph
              variant="extra-small"
              color="dark-reduced-opacity"
              tag="span"
            >
              {maxLabel}
            </Paragraph>
          </div>
        )}
        {showDisabledLabel && (
          <Paragraph
            variant="extra-small"
            color="dark-reduced-opacity"
            tag="div"
          >
            {disabledLabel}
          </Paragraph>
        )}
      </div>
    </>
  )
}

export default InputRange
