import React from "react"
import classnames from "classnames"
import { Tooltip } from "~components/Tooltip"
import { OverrideClassName } from "~types/OverrideClassName"
import { ToggleIconButtonMoods } from "./types"
import styles from "./ToggleIconButton.module.scss"

export type ToggleIconButtonProps = {
  icon: JSX.Element
  label: string
  /*
   * determines the active or inactive state along with the "aria-pressed" attribute
   */
  isActive?: boolean
  mood?: ToggleIconButtonMoods
} & OverrideClassName<React.ButtonHTMLAttributes<HTMLButtonElement>>

export const ToggleIconButton = React.forwardRef<
  HTMLButtonElement,
  ToggleIconButtonProps
>((props, ref) => {
  const {
    label,
    icon,
    isActive = false,
    mood = "default",
    disabled = false,
    classNameOverride,
    onClick,
    ...nativeButtonProps
  } = props
  return (
    <Tooltip
      text={label}
      display="inline-block"
      position="above"
      animationDuration={5}
    >
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
          disabled && styles.disabled
        )}
        {...nativeButtonProps}
      >
        {icon}
      </button>
    </Tooltip>
  )
})

ToggleIconButton.displayName = "ToggleIconButton"
