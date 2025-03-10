import React, { type InputHTMLAttributes } from 'react'
import classnames from 'classnames'
import { Icon } from '~components/__next__/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './ToggleSwitch.module.scss'

export type ToggledStatus = 'on' | 'off'

export type ToggleSwitchProps = {
  toggledStatus?: ToggledStatus
  /**
   * Alias for `onChange`
   */
  onToggle?: React.ChangeEventHandler<HTMLInputElement>
  reversed?: boolean
} & OverrideClassName<Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onToggle'>>

export const ToggleSwitch = ({
  toggledStatus,
  onToggle,
  reversed,
  disabled,
  ...restProps
}: ToggleSwitchProps): JSX.Element => {
  const isOn = toggledStatus === 'on'

  return (
    <span className={classnames(isOn ? styles.on : styles.off, reversed && styles.reversed)}>
      <input
        type="checkbox"
        className={classnames(styles.checkbox, disabled && styles.disabled)}
        checked={isOn ? true : false}
        onChange={onToggle}
        disabled={disabled}
        {...restProps}
      />
      <span className={classnames(styles.track, disabled && styles.disabled)}>
        <span className={styles.thumb}>
          <Icon name="check" isPresentational className={styles.checkIcon} />
        </span>
      </span>
    </span>
  )
}

ToggleSwitch.displayName = 'ToggleSwitch'
