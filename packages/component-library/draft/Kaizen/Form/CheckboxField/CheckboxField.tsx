import { Checkbox, CheckedStatus, Label } from "@kaizen/component-library/draft"
import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type CheckboxFieldProps = {
  id?: string
  automationId?: string
  name?: string
  labelText: string | React.ReactNode
  checkedStatus?: CheckedStatus
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  noBottomMargin?: boolean
}

type CheckboxField = React.FunctionComponent<CheckboxFieldProps>

const CheckboxField: CheckboxField = ({
  id = "",
  automationId,
  name = "",
  labelText,
  checkedStatus,
  onCheck,
  disabled = false,
  noBottomMargin = false,
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
      />
    </Label>
  </div>
)

export default CheckboxField
