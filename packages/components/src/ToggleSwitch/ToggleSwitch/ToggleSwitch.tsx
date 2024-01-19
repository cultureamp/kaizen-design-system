import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { CheckIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./ToggleSwitch.module.scss"

export type ToggledStatus = "on" | "off"

export type ToggleSwitchProps = {
  toggledStatus?: ToggledStatus
  /**
   * Alias for `onChange`
   */
  onToggle?: React.ChangeEventHandler<HTMLInputElement>
  reversed?: boolean
} & OverrideClassName<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">>

export const ToggleSwitch = ({
  toggledStatus,
  onToggle,
  reversed,
  ...restProps
}: ToggleSwitchProps): JSX.Element => {
  const isOn = toggledStatus === "on"

  return (
    <span
      className={classnames(
        isOn ? styles.on : styles.off,
        reversed && styles.reversed
      )}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isOn ? true : false}
        onChange={onToggle}
        {...restProps}
      />
      <span className={styles.track}>
        <span className={styles.thumb}>
          <CheckIcon classNameOverride={styles.checkIcon} role="presentation" />
        </span>
      </span>
    </span>
  )
}

ToggleSwitch.displayName = "ToggleSwitch"
