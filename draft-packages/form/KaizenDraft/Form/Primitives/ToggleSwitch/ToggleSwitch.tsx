import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export enum ToggledStatus {
  ON = "on",
  OFF = "off",
}

export enum ToggleTheme {
  DEFAULT = "default",
  FREEMIUM = "freemium",
}

export interface ToggleSwitchProps {
  id?: string
  automationId?: string
  name?: string
  toggledStatus?: ToggledStatus
  onToggle?: (event: React.ChangeEvent<HTMLInputElement>) => any
  disabled?: boolean
  theme?: ToggleTheme
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

type ToggleSwitch = React.FunctionComponent<ToggleSwitchProps>

const ToggleSwitch: ToggleSwitch = ({
  id,
  automationId,
  name,
  toggledStatus,
  onToggle,
  disabled,
  theme,
  onFocus,
  onBlur,
}) => {
  const isOn = toggledStatus === ToggledStatus.ON

  return (
    <span
      className={classnames({
        [styles.on]: isOn,
        [styles.off]: !isOn,
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
      />
      <span
        className={classnames(styles.track, {
          [styles.freemium]: theme === ToggleTheme.FREEMIUM,
        })}
      >
        <span className={styles.thumb} />
      </span>
    </span>
  )
}

export default ToggleSwitch
