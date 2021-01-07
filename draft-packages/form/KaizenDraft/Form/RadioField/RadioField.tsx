import classnames from "classnames"
import * as React from "react"
import { Label } from "../"
import RadioInput from "../Primitives/Radio/Radio"

import styles from "./styles.scss"

export type RadioFieldProps = {
  id: string
  automationId?: string
  name: string
  value: string
  labelText: string | React.ReactNode
  selectedStatus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  inline?: boolean
}

type RadioField = React.FunctionComponent<RadioFieldProps>

const RadioField: RadioField = ({
  id = "",
  automationId,
  name = "",
  value = "",
  labelText,
  selectedStatus = false,
  onChange,
  inline = false,
  disabled = false,
}) => (
  <div
    data-automation-id={automationId}
    className={classnames(styles.container, {
      [styles.selected]: selectedStatus,
      [styles.disabled]: disabled,
      [styles.inline]: inline,
    })}
  >
    <Label
      id={`${id}-field-label`}
      htmlFor={id}
      automationId={`${id}-field-label`}
      labelText={labelText}
      labelType="radio"
    >
      <RadioInput
        id={id}
        automationId={`${id}-radio-input`}
        disabled={disabled}
        selectedStatus={selectedStatus}
        value={value}
        name={name}
        onChange={onChange}
      />
    </Label>
  </div>
)

export default RadioField
