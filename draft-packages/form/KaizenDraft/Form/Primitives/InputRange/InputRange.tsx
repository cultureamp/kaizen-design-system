import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import { Paragraph } from "@kaizen/component-library"
import classnames from "classnames"
import styles from "./styles.scss"

export interface InputRangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  id: string
  value?: number
  min?: number
  max?: number
  minLabel: ReactNode
  maxLabel: ReactNode
  readOnly?: boolean
  classNameAndIHaveSpokenToDST?: string
}

const InputRange: React.FunctionComponent<InputRangeProps> = (
  props: InputRangeProps
) => {
  const {
    id,
    defaultValue,
    value,
    minLabel,
    maxLabel,
    onChange,
    "aria-describedby": ariaDescribedby,
    classNameAndIHaveSpokenToDST,
    disabled,
    readOnly,
    min = 1,
    max = 10,
    ...genericInputProps
  } = props

  const [step, setStep] = useState(0.5) // Let the dot center between the notch initially
  const visuallyHiddenHintId = `${id}-helper`
  const readOnlyWithNoValue = readOnly && !value && !defaultValue

  // This has been split out into a different variable to allow usage of defaultValue above^
  // Plus it lets us use max from props with its default value
  const defaultValueWithDefault = defaultValue || (max + 1) / 2

  return (
    <>
      <input
        className={classnames(
          styles.ratingScaleRange,
          classNameAndIHaveSpokenToDST,
          {
            [styles.hideThumb]: readOnlyWithNoValue,
            [styles.disabled]: disabled,
          }
        )}
        disabled={disabled || readOnly}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={value ? undefined : defaultValueWithDefault}
        value={value}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-describedby={`${visuallyHiddenHintId} ${
          ariaDescribedby ? ariaDescribedby : ""
        }`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStep(1) // Put the stepper to 1 to avoid floating value
          onChange && onChange(e)
        }}
        {...genericInputProps}
      />
      <div
        className={classnames(styles.spokes, {
          [styles.disabled]: disabled,
        })}
      >
        {[...Array(max)].map((_, index) => (
          <div key={`${id}-spoke-${index}`} className={styles.spokeContainer}>
            <div className={styles.spoke} />
          </div>
        ))}
      </div>
      <div className={styles.visuallyHidden} id={visuallyHiddenHintId}>
        {min} is {minLabel}, {max} is {maxLabel}
      </div>
      <div className={styles.labelsContainer}>
        {!readOnlyWithNoValue && (
          <div
            className={classnames(styles.sliderLabels, {
              [styles.disabled]: disabled,
            })}
          >
            <Paragraph variant="small" color="dark-reduced-opacity" tag="span">
              {minLabel}
            </Paragraph>
            <Paragraph variant="small" color="dark-reduced-opacity" tag="span">
              {maxLabel}
            </Paragraph>
          </div>
        )}
      </div>
    </>
  )
}

export default InputRange
