import React, { type PropsWithChildren } from 'react'
import classNames from 'classnames'
import { ListBoxItem as RACListBoxItem, type ListBoxItemProps } from 'react-aria-components'
import styles from './ListItem.module.css'

export const ListItem = ({
  children,
  className,
  ...props
}: ListBoxItemProps<object> & PropsWithChildren): React.ReactElement => {
  return (
    <RACListBoxItem className={classNames(styles.listItem, className)} {...props}>
      {children}
    </RACListBoxItem>
  )
}
ListItem.displayName = 'SingleSelect.ListItem'
