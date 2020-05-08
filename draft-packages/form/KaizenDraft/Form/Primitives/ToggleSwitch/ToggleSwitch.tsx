import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

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
