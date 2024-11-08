import React, { forwardRef, ReactNode } from "react"
import { MenuItem as RACMenuItem, MenuItemProps as RACMenuItemProps } from "react-aria-components"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./MenuItem.module.scss"

export type MenuItemProps = RACMenuItemProps & {
  /**
   * Provides positioning for an icon to the left of the menu item content
   */
  icon?: ReactNode
}

/**
 * A MenuItem represents an individual action in a Menu.
 */
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, icon, children, ...props }, ref): JSX.Element => (
    <RACMenuItem ref={ref} className={mergeClassNames(styles.item, className)} {...props}>
      <>
        {icon && <span className={styles.iconWrapper}>{icon}</span>}
        {children}
      </>
    </RACMenuItem>
  ),
)

MenuItem.displayName = "MenuItem"
