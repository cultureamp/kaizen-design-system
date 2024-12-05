import React, { forwardRef, ReactNode } from 'react'
import { MenuItem as RACMenuItem, MenuItemProps as RACMenuItemProps } from 'react-aria-components'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from './MenuItem.module.css'

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
  ({ className, icon, children, textValue, ...props }, ref): JSX.Element => {
    const determinedTextValue = textValue ?? (typeof children === 'string' ? children : undefined)
    return (
      <RACMenuItem
        ref={ref}
        className={mergeClassNames(styles.item, className)}
        textValue={determinedTextValue}
        {...props}
      >
        <>
          {typeof children === 'string' && icon ? (
            <div className={styles.flexWrapper}>
              <span className={styles.iconWrapper}>{icon}</span>
              {children}
            </div>
          ) : (
            <>{children}</>
          )}
        </>
      </RACMenuItem>
    )
  },
)

MenuItem.displayName = 'MenuItem'
