import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export type RadioInputProps = {
  id: string
  automationId?: string
  selectedStatus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  name: string
  value: string
}

type RadioInput = React.FunctionComponent<RadioInputProps>

const renderSelected = (selectedStatus: boolean) => {
  if (selectedStatus) {
    return <div className={styles.icon} />
  }
  return
}

const RadioInput: RadioInput = ({
  id,
  automationId,
  name,
  value,
  selectedStatus = false,
  onChange,
  disabled = false,
}) => (
  <div>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={selectedStatus}
      data-automation-id={automationId}
      // TODO - needsclick class disables fastclick on this element to prevent double tap on mobile.
      // Remove when fastclick is removed from consuming repos
      className={classnames(styles.radioInput, "needsclick")}
      onChange={onChange}
      disabled={disabled}
    />
    <div className={styles.box}>{renderSelected(selectedStatus)}</div>
  </div>
)

export default RadioInput
