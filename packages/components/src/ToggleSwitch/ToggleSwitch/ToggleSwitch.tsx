import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { Icon } from "~components/__future__/Icon"
import { OverrideClassName } from "~components/types/OverrideClassName"
import styles from "./ToggleSwitch.module.scss"

export type ToggledStatus = "on" | "off"

export type ToggleSwitchProps = {
  toggledStatus?: ToggledStatus
  /**
   * Alias for `onChange`
   */
  onToggle?: React.ChangeEventHandler<HTMLInputElement>
  reversed?: boolean
} & OverrideClassName<Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "onToggle">>

export const ToggleSwitch = ({
  toggledStatus,
  onToggle,
  reversed,
  ...restProps
}: ToggleSwitchProps): JSX.Element => {
  const isOn = toggledStatus === "on"

  return (
    <span className={classnames(isOn ? styles.on : styles.off, reversed && styles.reversed)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isOn ? true : false}
        onChange={onToggle}
        {...restProps}
      />
      <span className={styles.track}>
        <span className={styles.thumb}>
          <Icon name="check" isPresentational className={styles.checkIcon} />
        </span>
      </span>
    </span>
  )
}

ToggleSwitch.displayName = "ToggleSwitch"
