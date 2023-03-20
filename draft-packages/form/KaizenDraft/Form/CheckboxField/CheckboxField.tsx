import React from "react"
import classnames from "classnames"
import { Checkbox, CheckboxProps, CheckedStatus, Label } from "../Primitives"
import styles from "./CheckboxField.module.scss"

export interface CheckboxFieldProps extends CheckboxProps {
  id?: string
  labelText: string | React.ReactNode
  checkedStatus?: CheckedStatus
  disabled?: boolean
  reversed?: boolean
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
  id = "",
  labelText,
  checkedStatus,
  disabled = false,
  reversed = false,
  automationId,
  classNameOverride,
  ...restProps
}: CheckboxFieldProps): JSX.Element => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.container, classNameOverride, {
      [styles.checked]: checkedStatus === "on",
      [styles.mixed]: checkedStatus === "mixed",
      [styles.reversed]: reversed,
    })}
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

CheckboxField.displayName = "CheckboxField"
