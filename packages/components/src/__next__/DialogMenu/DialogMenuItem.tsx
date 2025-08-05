import React, { forwardRef, type ReactNode } from 'react'
import {
  Button as RACButton,
  Link as RACLink,
  type ButtonProps as RACButtonProps,
  type LinkProps as RACLinkProps,
} from 'react-aria-components'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from './DialogMenuItem.module.css'

type BaseDialogMenuItemProps = {
  /**
   * Provides positioning for an icon to the left of the menu item content
   */
  icon?: ReactNode
}

type DialogMenuItemAsLink = BaseDialogMenuItemProps &
  Omit<RACLinkProps, 'children'> & {
    href: string
    children: ReactNode
  }

type DialogMenuItemAsButton = BaseDialogMenuItemProps &
  Omit<RACButtonProps, 'children'> & {
    href?: never
    children: ReactNode
  }

export type DialogMenuItemProps = DialogMenuItemAsLink | DialogMenuItemAsButton

/**
 * A DialogMenuItem represents an individual action in a DialogMenu.
 * Uses Link component when href is provided, otherwise uses Button.
 */
export const DialogMenuItem = forwardRef<HTMLElement, DialogMenuItemProps>(
  ({ className, icon, children, href, ...props }, ref): JSX.Element => {
    const content =
      typeof children === 'string' ? (
        <div className={styles.flexWrapper}>
          {icon && <span className={styles.iconWrapper}>{icon}</span>}
          {children}
        </div>
      ) : (
        children
      )

    if (href) {
      const linkProps = props as Omit<RACLinkProps, 'href' | 'children'>
      const content =
        typeof children === 'string' && icon ? (
          <div className={styles.flexWrapper}>
            <span className={styles.iconWrapper}>{icon}</span>
            {children}
          </div>
        ) : (
          children
        )

      return (
        <li>
          <RACLink
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            className={mergeClassNames(styles.item, className)}
            href={href}
            {...linkProps}
          >
            {content}
          </RACLink>
        </li>
      )
    }

    const buttonProps = props as Omit<RACButtonProps, 'children'>

    return (
      <li>
        <RACButton
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={mergeClassNames(styles.item, className)}
          {...buttonProps}
        >
          {content}
        </RACButton>
      </li>
    )
  },
)

DialogMenuItem.displayName = 'DialogMenuItem'
