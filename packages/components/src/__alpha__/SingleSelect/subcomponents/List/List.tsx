import React from 'react'
import type { Node } from '@react-types/shared'
import { useListBox } from 'react-aria'
import { type ListProps, type SelectItem } from '../../types'
import { ListItem } from '../ListItem'
import { ListSection } from '../ListSection'
import styles from './List.module.css'

export const List = <T extends SelectItem>({
  state,
  listBoxOptions,
  listBoxRef,
}: ListProps<T>): JSX.Element => {
  const { listBoxProps } = useListBox({ ...listBoxOptions, autoFocus: 'first' }, state, listBoxRef)

  const renderNode = (node: Node<T>): JSX.Element | null => {
    if (node.type === 'section') {
      return node.rendered ? (
        <ListSection key={String(node.key)} section={node} state={state} />
      ) : null
    } else {
      const { selectedIcon, selectedPosition, className } = node.props
      return (
        <ListItem
          key={String(node.key)}
          item={node}
          state={state}
          selectedIcon={selectedIcon}
          selectedPosition={selectedPosition}
          className={className}
        />
      )
    }
  }

  return (
    <ul {...listBoxProps} ref={listBoxRef} className={styles.list}>
      {Array.from(state.collection).map(renderNode)}
    </ul>
  )
}
