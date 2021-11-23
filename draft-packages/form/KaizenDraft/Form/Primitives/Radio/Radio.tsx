import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export type RadioProps = {
  id: string
  automationId?: string
  selectedStatus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  reversed?: boolean
  name: string
  value: string
}

type Radio = React.FunctionComponent<RadioProps>

const renderSelected = (selectedStatus: boolean, reversed) => {
  if (selectedStatus) {
    return (
      <div
        className={classnames(styles.icon, {
          [styles.reversed]: reversed,
        })}
      />
    )
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
  reversed = false,
}) => (
  <span>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={selectedStatus}
      data-automation-id={automationId}
      className={classnames(styles.radioInput, {
        [styles.reversed]: reversed,
      })}
      onChange={onChange}
      disabled={disabled}
    />
    <span
      className={classnames(styles.box, {
        [styles.reversed]: reversed,
      })}
    >
      {renderSelected(selectedStatus, reversed)}
    </span>
  </span>
)

export default Radio
