import React from "react"
import classnames from "classnames"
import { Label, Radio, RadioProps } from "../Primitives"
import styles from "./RadioField.module.scss"

export interface RadioFieldProps extends RadioProps {
  id: string
  labelText: string | React.ReactNode
  selectedStatus?: boolean
  inline?: boolean
  disabled?: boolean
  reversed?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * {@link https://cultureamp.design/components/radio-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-radio-field--interactive-kaizen-site-demo Storybook}
 */
export const RadioField = React.forwardRef<HTMLInputElement, RadioFieldProps>(
  (
    {
      id,
      labelText,
      selectedStatus = false,
      inline = false,
      disabled = false,
      reversed = false,
      automationId,
      classNameOverride,
      ...restProps
    },
    ref
  ): JSX.Element => (
    <div
      data-automation-id={automationId}
      className={classnames(styles.container, classNameOverride, {
        [styles.selected]: selectedStatus,
        [styles.inline]: inline,
        [styles.reversed]: reversed,
      })}
    >
      <Label
        automationId={`${id}-field-label`}
        id={`${id}-field-label`}
        htmlFor={id}
        labelText={labelText}
        labelType="radio"
        disabled={disabled}
        reversed={reversed}
      >
        <Radio
          ref={ref}
          automationId={`${id}-radio-input`}
          id={id}
          disabled={disabled}
          reversed={reversed}
          selectedStatus={selectedStatus}
          {...restProps}
        />
      </Label>
    </div>
  )
)

RadioField.displayName = "RadioField"
