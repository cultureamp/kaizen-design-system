import React, { type PropsWithChildren } from 'react'
import classNames from 'classnames'
import { ListBoxItem as RACListBoxItem, type ListBoxItemProps } from 'react-aria-components'
import { type SelectItem } from '../../types'
import styles from './ListItem.module.css'

export const ListItem = ({
  children,
  className,
  ...props
}: ListBoxItemProps<SelectItem> & PropsWithChildren): React.ReactElement => {
  return (
    <RACListBoxItem className={classNames(styles.listItem, className)} {...props}>
      {children}
    </RACListBoxItem>
  )
}
ListItem.displayName = 'SingleSelect.ListItem'
