import React, { forwardRef } from 'react'
import { Popover, Menu as RACMenu, MenuProps as RACMenuProps } from 'react-aria-components'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from './Menu.module.css'

export type MenuProps = Omit<
  RACMenuProps<HTMLDivElement>,
  'selectionMode' | 'disallowEmptySelection' | 'selectedKeys' | 'defaultSelectedKeys'
>

/**
 * A menu displays a list of actions or options that a user can choose.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <Popover>
      <RACMenu className={mergeClassNames(styles.menu, className)} ref={ref} {...props} />
    </Popover>
  ),
)

Menu.displayName = 'Menu'
