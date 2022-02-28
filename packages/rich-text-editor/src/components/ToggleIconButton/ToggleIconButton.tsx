import React from "react"
import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import styles from "./ToggleIconButton.scss"

export interface ToggleIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  /*
   * determines the active or inactive state along with the "aria-pressed" attribute
   */
  pressed?: boolean
}

export const ToggleIconButton: React.VFC<ToggleIconButtonProps> =
  React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
    const { icon, label, pressed = false, ...nativeButtonProps } = props
    return (
      <button
        ref={ref}
        aria-pressed={pressed}
        className={classnames(styles.button, {
          [styles.pressed]: pressed,
        })}
        {...nativeButtonProps}
      >
        <div className={styles.iconWrapper}>
          <Icon icon={icon} role="presentation" inheritSize />
        </div>
      </button>
    )
  })
