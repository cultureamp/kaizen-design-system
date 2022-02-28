import React from "react"
import { Icon } from "@kaizen/component-library"
import styles from "./ToggleIconButton.scss"

export interface ToggleIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  // ref?: React.RefObject<HTMLButtonElement>
  /*
   * determines the active or inactive state along with the "aria-pressed" attribute
   */
  pressed?: boolean
}

export const ToggleIconButton: React.VFC<ToggleIconButtonProps> =
  React.forwardRef((props, ref) => {
    const { icon, label, pressed = false, ...nativeButtonProps } = props
    return (
      <button aria-pressed={pressed} {...nativeButtonProps}>
        <Icon icon={icon} role="presentation" />
        <span>{label}</span>
      </button>
    )
  })
