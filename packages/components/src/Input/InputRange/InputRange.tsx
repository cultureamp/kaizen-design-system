import React, { InputHTMLAttributes, ReactNode, useState } from "react"
import classnames from "classnames"
import { Text } from "~components/Text"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./InputRange.module.scss"

export type InputRangeProps = {
  id: string
  defaultValue?: number
  value?: number
  minLabel: ReactNode
  maxLabel: ReactNode
  min?: number
  max?: number
} & OverrideClassName<InputHTMLAttributes<HTMLInputElement>>

/**
 * {@link https://cultureamp.design/?path=/docs/components-input-range--docs Storybook}
 */
export const InputRange = ({
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
}: InputRangeProps): JSX.Element => {
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
      <VisuallyHidden id={visuallyHiddenHintId}>
        {min} is {minLabel}, {max} is {maxLabel}
      </VisuallyHidden>
      <div className={styles.labelsContainer}>
        {!readOnlyWithNoValue && (
          <div
            className={classnames(
              styles.sliderLabels,
              disabled && styles.disabled
            )}
          >
            <Text variant="small" color="dark-reduced-opacity" tag="span">
              {minLabel}
            </Text>
            <Text variant="small" color="dark-reduced-opacity" tag="span">
              {maxLabel}
            </Text>
          </div>
        )}
      </div>
    </>
  )
}

InputRange.displayName = "InputRange"
