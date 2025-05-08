import React from 'react'
import classnames from 'classnames'
import {
  ListBoxItem as RACListBoxItem,
  type ListBoxItemProps as RACListBoxItemProps,
} from 'react-aria-components'
import styles from './styles.module.scss'

export const ListBoxItem = ({ children, ...props }: RACListBoxItemProps): JSX.Element => {
  return (
    <RACListBoxItem className={classnames(styles.listBoxItem, props.className)} {...props}>
      {children}
    </RACListBoxItem>
  )
}
