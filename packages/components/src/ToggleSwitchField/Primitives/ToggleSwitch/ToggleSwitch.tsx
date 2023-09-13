import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import checkIcon from "@kaizen/component-library/icons/check.icon.svg"
import styles from "./ToggleSwitch.module.scss"

export enum ToggledStatus {
  ON = "on",
  OFF = "off",
}

export interface ToggleSwitchProps
  extends OverrideClassName<
    Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">
  > {
  toggledStatus?: ToggledStatus
  /**
   * Alias for `onChange`
   */
  onToggle?: React.ChangeEventHandler<HTMLInputElement>
  reversed?: boolean
}

export const ToggleSwitch = ({
  toggledStatus,
  onToggle,
  reversed,
  ...restProps
}: ToggleSwitchProps): JSX.Element => {
  const isOn = toggledStatus === ToggledStatus.ON

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
          <Icon
            icon={checkIcon}
            classNameOverride={styles.checkIcon}
            role="presentation"
          />
        </span>
      </span>
    </span>
  )
}

ToggleSwitch.displayName = "ToggleSwitch"
