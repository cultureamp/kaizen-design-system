import React from 'react'
import { useListBox } from 'react-aria'
import { Text } from '~components/Text'
import { type ListProps, type SelectItem } from '../../types'
import { ListItem } from '../ListItem/ListItem'

import styles from './List.module.css'

export function List<T extends SelectItem>({
  state,
  listBoxOptions,
  listBoxRef,
}: ListProps<T>): JSX.Element {
  const { listBoxProps } = useListBox(listBoxOptions, state, listBoxRef)
  const renderNode = (node: any): JSX.Element => {
    if (node.type === 'section') {
      return (
        <li key={node.key}>
          {node.rendered && (
            <Text variant="small" classNameOverride={styles.sectionTitle}>
              {node.rendered}
            </Text>
          )}
          <ul>{[...node.childNodes].map(renderNode)}</ul>
        </li>
      )
    } else {
      return <ListItem key={node.key} item={node} state={state} />
    }
  }

  return (
    <ul {...listBoxProps} ref={listBoxRef} className={styles.list}>
      {Array.from(state.collection).map(renderNode)}
    </ul>
  )
}

List.displayName = 'SingleSelect.List'
