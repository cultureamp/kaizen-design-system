import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export enum ToggledStatus {
  ON = "on",
  OFF = "off",
}
export interface ToggleSwitchProps {
  id?: string
  automationId?: string
  name?: string
  toggledStatus?: ToggledStatus
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  reversed?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  ref?: React.RefObject<HTMLInputElement>
}

type ToggleSwitch = React.FunctionComponent<ToggleSwitchProps>

const ToggleSwitch: ToggleSwitch = ({
  id,
  automationId,
  name,
  toggledStatus,
  onToggle,
  disabled,
  reversed,
  onFocus,
  onBlur,
  ref,
}) => {
  const isOn = toggledStatus === ToggledStatus.ON

  return (
    <span
      className={classnames({
        [styles.on]: isOn,
        [styles.off]: !isOn,
        [styles.reversed]: reversed,
      })}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        data-automation-id={automationId}
        className={styles.checkbox}
        checked={isOn ? true : false}
        onChange={onToggle}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        ref={ref}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </span>
  )
}

export default ToggleSwitch
