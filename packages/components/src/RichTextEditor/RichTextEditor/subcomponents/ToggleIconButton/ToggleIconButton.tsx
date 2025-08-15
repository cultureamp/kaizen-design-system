import React from 'react'
import classnames from 'classnames'
import { Tooltip, TooltipTrigger } from '~components/Tooltip'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type ToggleIconButtonMoods } from './types'
import styles from './ToggleIconButton.module.scss'

export type ToggleIconButtonProps = {
  icon: JSX.Element
  label: string
  /*
   * determines the active or inactive state along with the "aria-pressed" attribute
   */
  isActive?: boolean
  mood?: ToggleIconButtonMoods
} & OverrideClassName<React.ButtonHTMLAttributes<HTMLButtonElement>>

export const ToggleIconButton = React.forwardRef<HTMLButtonElement, ToggleIconButtonProps>(
  (props, ref) => {
    const {
      label,
      icon,
      isActive = false,
      mood = 'default',
      disabled = false,
      classNameOverride,
      onClick,
      ...nativeButtonProps
    } = props
    return (
      <TooltipTrigger>
        <button
          ref={ref}
          type="button"
          aria-pressed={isActive}
          aria-label={label}
          aria-disabled={disabled}
          onMouseDown={(e): void => e.preventDefault()}
          onClick={!disabled ? onClick : undefined}
          className={classnames(
            styles.button,
            classNameOverride,
            styles[mood],
            isActive && styles.active,
            disabled && styles.disabled,
          )}
          {...nativeButtonProps}
        >
          {icon}
        </button>
        <Tooltip placement="top">{label}</Tooltip>
      </TooltipTrigger>
    )
  },
)

ToggleIconButton.displayName = 'ToggleIconButton'
