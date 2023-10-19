import React, { useId } from "react"
import classnames from "classnames"
import { Label } from "~components/Label"
import { Checkbox, CheckboxProps, CheckedStatus } from "../Checkbox/Checkbox"
import styles from "./CheckboxField.module.scss"

export type CheckboxFieldProps = Omit<CheckboxProps, "id"> & {
  id?: string
  labelText: string | React.ReactNode
  checkedStatus?: CheckedStatus
  disabled?: boolean
  reversed?: boolean
  noBottomMargin?: boolean
  "data-testid"?: string
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082094661/Checkbox+Field Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-checkobx-controls-checkbox-field--docs Storybook}
 */
export const CheckboxField = ({
  id: propsId,
  labelText,
  checkedStatus,
  disabled = false,
  reversed = false,
  noBottomMargin = false,
  "data-testid": dataTestId,
  classNameOverride,
  ...restProps
}: CheckboxFieldProps): JSX.Element => {
  const id = propsId ?? useId()

  return (
    <div
      data-testid={dataTestId}
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
        data-testid={`${id}-field-label`}
        labelText={labelText}
        reversed={reversed}
        labelType="checkbox"
        disabled={disabled}
      >
        <Checkbox
          id={`${id}-field-checkbox`}
          data-testid={`${id}-field-checkbox`}
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
