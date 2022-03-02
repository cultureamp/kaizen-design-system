import React from "react"
import { Tooltip } from "@kaizen/draft-tooltip"
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
  isActive?: boolean
}

export const ToggleIconButton: React.VFC<ToggleIconButtonProps> =
  React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
    const { icon, label, isActive = false, ...nativeButtonProps } = props
    return (
      <div>
        <Tooltip text={label} display="inline-block" position="above">
          <button
            ref={ref}
            aria-pressed={isActive}
            className={classnames(styles.button, {
              [styles.active]: isActive,
            })}
            {...nativeButtonProps}
          >
            <div className={styles.iconWrapper}>
              <Icon icon={icon} role="presentation" inheritSize />
            </div>
          </button>
        </Tooltip>
      </div>
    )
  })
