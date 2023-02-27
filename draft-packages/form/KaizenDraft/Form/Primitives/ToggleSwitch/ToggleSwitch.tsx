import React, { InputHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
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
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const ToggleSwitch = React.forwardRef<
  HTMLInputElement,
  ToggleSwitchProps
>(
  (
    { toggledStatus, onToggle, reversed, automationId, ...restProps },
    ref
  ): JSX.Element => {
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
          ref={ref}
          type="checkbox"
          data-automation-id={automationId}
          className={styles.checkbox}
          checked={isOn ? true : false}
          onChange={onToggle}
          {...restProps}
        />
        <span className={styles.track}>
          <span className={styles.thumb} />
        </span>
      </span>
    )
  }
)

ToggleSwitch.displayName = "ToggleSwitch"
