import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { Label, Radio, RadioProps } from "../Primitives"
import styles from "./RadioField.module.scss"

export interface RadioFieldProps extends Omit<RadioProps, "id"> {
  id?: string
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
export const RadioField = ({
  id: propsId,
  labelText,
  selectedStatus = false,
  inline = false,
  disabled = false,
  reversed = false,
  automationId,
  classNameOverride,
  ...restProps
}: RadioFieldProps): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
  return (
    <div
      data-automation-id={automationId}
      className={classnames(
        styles.container,
        classNameOverride,
        selectedStatus && styles.selected,
        inline && styles.inline,
        reversed && styles.reversed
      )}
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
}

RadioField.displayName = "RadioField"
