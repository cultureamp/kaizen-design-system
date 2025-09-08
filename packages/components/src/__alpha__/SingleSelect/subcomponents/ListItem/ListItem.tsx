import React from 'react'
import classNames from 'classnames'
import { useOption } from 'react-aria'
import { type ListItemProps, type SelectItem } from '../../types'
import styles from './ListItem.module.css'

export const ListItem = <T extends SelectItem>({ item, state }: ListItemProps<T>): JSX.Element => {
  const ref = React.useRef(null)
  const { optionProps, isFocused } = useOption({ key: item.key }, state, ref)

  return (
    <li
      key={item.key}
      {...optionProps}
      ref={ref}
      className={classNames(styles.listItem, {
        [styles.focused]: isFocused,
      })}
    >
      {item.rendered}
    </li>
  )
}
