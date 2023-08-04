import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { Checkbox, CheckboxProps, CheckedStatus, Label } from "../Primitives"
import styles from "./CheckboxField.module.scss"

export interface CheckboxFieldProps extends Omit<CheckboxProps, "id"> {
  id?: string
  labelText: string | React.ReactNode
  checkedStatus?: CheckedStatus
  disabled?: boolean
  reversed?: boolean
  noBottomMargin?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * {@link https://cultureamp.design/components/checkbox-field/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-form-checkbox-field--interactive-kaizen-site-demo Storybook}
 */
export const CheckboxField = ({
  id: propsId,
  labelText,
  checkedStatus,
  disabled = false,
  reversed = false,
  noBottomMargin = false,
  automationId,
  classNameOverride,
  ...restProps
}: CheckboxFieldProps): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
  return (
    <div
      data-automation-id={automationId}
      className={classnames(
        styles.container,
        classNameOverride,
        checkedStatus === "on" && styles.checked,
        checkedStatus === "mixed" && styles.mixed,
        reversed && styles.reversed,
        noBottomMargin && styles.noBottomMargin
      )}
    >
      <Label
        id={`${id}-field-label`}
        htmlFor={`${id}-field-checkbox`}
        automationId={`${id}-field-label`}
        labelText={labelText}
        reversed={reversed}
        labelType="checkbox"
        disabled={disabled}
      >
        <Checkbox
          id={`${id}-field-checkbox`}
          automationId={`${id}-field-checkbox`}
          disabled={disabled}
          reversed={reversed}
          checkedStatus={checkedStatus}
          {...restProps}
        />
      </Label>
    </div>
  )
}

CheckboxField.displayName = "CheckboxField"
