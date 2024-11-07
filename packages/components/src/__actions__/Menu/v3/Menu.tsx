import React, { forwardRef } from 'react'
import { Menu as RACMenu, MenuProps as RACMenuProps } from 'react-aria-components'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from './Menu.module.scss'

export type MenuProps = Omit<
  RACMenuProps<HTMLDivElement>,
  'selectionMode' | 'disallowEmptySelection' | 'selectedKeys' | 'defaultSelectedKeys'
>

/**
 * A menu displays a list of actions or options that a user can choose.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <RACMenu className={mergeClassNames(styles.menu, className)} ref={ref} {...props} />
  ),
)

Menu.displayName = 'Menu'
