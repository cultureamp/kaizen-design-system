import React from 'react'
import { useOption } from 'react-aria'
import { type ListItemProps } from '../../types'
import styles from './ListItem.module.css'

export function ListItem<T>({ item, state }: ListItemProps<T>): JSX.Element {
  const ref = React.useRef(null)
  const { optionProps } = useOption({ key: item.key }, state, ref)

  return (
    <li {...optionProps} ref={ref} className={styles.listItem}>
      {item.rendered}
    </li>
  )
}

ListItem.displayName = 'SingleSelect.ListItem'
