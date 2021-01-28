import classnames from "classnames"
import * as React from "react"
import { Checkbox, CheckedStatus, Label } from ".."

import styles from "./styles.scss"

export type CheckboxFieldProps = {
  id?: string
  automationId?: string
  name?: string
  labelText: string | React.ReactNode
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any
  disabled?: boolean
  noBottomMargin?: boolean
  tabIndex?: number
  value?: string
}

type CheckboxField = React.FunctionComponent<CheckboxFieldProps>

const CheckboxField: CheckboxField = ({
  id = "",
  automationId,
  name = "",
  labelText,
  checkedStatus,
  onCheck,
  onFocus,
  onBlur,
  disabled = false,
  noBottomMargin = false,
  tabIndex,
  value,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.container, {
      [styles.checked]: checkedStatus === "on",
      [styles.mixed]: checkedStatus === "mixed",
      [styles.disabled]: disabled,
      [styles.noBottomMargin]: noBottomMargin,
    })}
  >
    <Label
      id={`${id}-field-label`}
      htmlFor={`${id}-field-checkbox`}
      automationId={`${id}-field-label`}
      labelText={labelText}
      labelType="checkbox"
    >
      <Checkbox
        id={`${id}-field-checkbox`}
        automationId={`${id}-field-checkbox`}
        disabled={disabled}
        checkedStatus={checkedStatus}
        name={name}
        onCheck={onCheck}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        value={value}
      />
    </Label>
  </div>
)

export default CheckboxField
