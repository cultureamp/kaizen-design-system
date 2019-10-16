import * as React from "react"
import { hot } from "react-hot-loader"
const styles = require("./styles.scss")

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
      className={styles.radioInput}
      onChange={onChange}
      disabled={disabled}
    />
    <div className={styles.box}>{renderSelected(selectedStatus)}</div>
  </div>
)

export default hot(module)(RadioInput)
