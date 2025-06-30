import React, { type PropsWithChildren } from 'react'
import classNames from 'classnames'
import { ListBox as RACListBox, type ListBoxProps } from 'react-aria-components'
import styles from './List.module.css'

export const List = ({
  children,
  className,
  ...props
}: ListBoxProps<object> & PropsWithChildren): React.ReactElement => {
  return (
    <RACListBox className={classNames(styles.list, className)} {...props}>
      {children}
    </RACListBox>
  )
}
List.displayName = 'SingleSelect.List'
