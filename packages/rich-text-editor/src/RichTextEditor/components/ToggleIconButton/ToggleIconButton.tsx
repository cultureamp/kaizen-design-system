import React from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./ToggleIconButton.scss"

export interface ToggleIconButtonProps
  extends OverrideClassName<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  /*
   * determines the active or inactive state along with the "aria-pressed" attribute
   */
  isActive?: boolean
  mood?:
    | "default"
    | "secondary"
    | "primary"
    | "destructive"
    | "secondary-destructive"
}

export const ToggleIconButton: React.VFC<ToggleIconButtonProps> =
  React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
    const {
      icon,
      label,
      isActive = false,
      mood = "default",
      disabled = false,
      classNameOverride,
      onClick,
      ...nativeButtonProps
    } = props
    return (
      <Tooltip text={label} display="inline-block" position="above">
        <button
          ref={ref}
          type="button"
          aria-pressed={isActive}
          aria-label={label}
          aria-disabled={disabled}
          onMouseDown={e => e.preventDefault()}
          onClick={!disabled ? onClick : undefined}
          className={classnames(styles.button, classNameOverride, {
            [styles.active]: isActive,
            [styles[mood]]: mood,
            [styles.disabled]: disabled,
          })}
          {...nativeButtonProps}
        >
          <Icon icon={icon} role="presentation" />
        </button>
      </Tooltip>
    )
  })

ToggleIconButton.displayName = "ToggleIconButton"
