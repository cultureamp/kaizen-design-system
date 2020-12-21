import classnames from "classnames"
import * as React from "react"

import styles from "../../../styles/ToggleSwitch.module.scss"

export enum ToggledStatus {
  ON = "on",
  OFF = "off",
}

export enum ToggleTheme {
  DEFAULT = "default",
  FREEMIUM = "freemium",
}

interface Props {
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

type ToggleSwitch = React.FunctionComponent<Props>

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
    <div
      className={classnames({
        [styles.on]: isOn,
        [styles.off]: !isOn,
        [styles.disabled]: disabled,
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
      <div
        className={classnames(styles.track, {
          [styles.freemium]: theme === ToggleTheme.FREEMIUM,
        })}
      >
        <div className={styles.thumb} />
      </div>
    </div>
  )
}

export default ToggleSwitch
