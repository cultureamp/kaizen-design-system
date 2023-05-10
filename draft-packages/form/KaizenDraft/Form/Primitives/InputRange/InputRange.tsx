import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Paragraph } from "@kaizen/typography"
import styles from "./InputRange.module.scss"

export interface InputRangeProps
  extends OverrideClassName<InputHTMLAttributes<HTMLInputElement>> {
  id: string
  defaultValue?: number
  value?: number
  minLabel: ReactNode
  maxLabel: ReactNode
  min?: number
  max?: number
}

export const InputRange = (props: InputRangeProps): JSX.Element => {
  const {
    id,
    defaultValue,
    value,
    minLabel,
    maxLabel,
    min = 1,
    max = 10,
    onChange,
    "aria-describedby": ariaDescribedby,
    classNameOverride,
    disabled,
    readOnly,
    ...restProps
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
        id={id}
        className={classnames(
          styles.ratingScaleRange,
          classNameOverride,
          readOnlyWithNoValue && styles.hideThumb,
          disabled && styles.disabled
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setStep(1) // Put the stepper to 1 to avoid floating value
          onChange?.(e)
        }}
        {...restProps}
      />
      <div className={classnames(styles.spokes, disabled && styles.disabled)}>
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
            className={classnames(
              styles.sliderLabels,
              disabled && styles.disabled
            )}
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

InputRange.displayName = "InputRange"
