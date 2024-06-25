import React, { forwardRef, ReactNode, useContext } from "react"
import {
  MenuItem as RACMenuItem,
  MenuItemProps as RACMenuItemProps,
} from "react-aria-components"
import { ChevronRightIcon } from "~components/Icon"
import { mergeClassNames } from "~utils/mergeClassNames"
import { SubmenuTriggerContext } from "./SubmenuTrigger"
import styles from "./MenuItem.module.scss"

export type MenuItemProps = RACMenuItemProps & {
  /**
   * Provides positioning for an icon to the left of the menu item content
   */
  icon?: ReactNode
  /**
   * Adjusts the styling to distinguish the action in some way
   */
  variant?: "default" | "destructive"
}

/**
 * A MenuItem represents an individual action in a Menu.
 */
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, icon, children, variant, ...props }, ref): JSX.Element => {
    const submenuTriggerContext = useContext(SubmenuTriggerContext)
    if (submenuTriggerContext !== null) {
      return (
        <RACMenuItem
          className={mergeClassNames(styles.item, className)}
          ref={ref}
          {...props}
        >
          {(...renderProps) => (
            <>
              <div className={styles.submenuTriggerInner}>
                {typeof children === "function"
                  ? children(...renderProps)
                  : children}
              </div>
              <ChevronRightIcon role="presentation" />
            </>
          )}
        </RACMenuItem>
      )
    }

    return (
      <RACMenuItem
        className={mergeClassNames(
          styles.item,
          variant === "destructive" && styles.destructive,
          className
        )}
        {...props}
      >
        <>
          {icon && <span className={styles.iconWrapper}>{icon}</span>}
          {children}
        </>
      </RACMenuItem>
    )
  }
)
