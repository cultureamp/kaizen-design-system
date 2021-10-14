import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export type RadioProps = {
  id: string
  automationId?: string
  selectedStatus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  name: string
  value: string
}

type Radio = React.FunctionComponent<RadioProps>

const renderSelected = (selectedStatus: boolean) => {
  if (selectedStatus) {
    return <div className={styles.icon} />
  }
  return
}

const Radio: Radio = ({
  id,
  automationId,
  name,
  value,
  selectedStatus = false,
  onChange,
  disabled = false,
}) => (
  <span>
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
    <span className={styles.box}>{renderSelected(selectedStatus)}</span>
  </span>
)

export default Radio
