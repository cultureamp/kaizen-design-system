import React from 'react'
import {
  TreeItem as RACTreeItem,
  type TreeItemProps as RACTreeItemProps,
} from 'react-aria-components'
import styles from './styles.module.scss'

export const TreeItem = ({ children, ...props }: RACTreeItemProps): JSX.Element => {
  return (
    <RACTreeItem {...props} className={styles.reactAriaTreeItem}>
      {children}
    </RACTreeItem>
  )
}
