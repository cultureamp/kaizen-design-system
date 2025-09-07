import React from 'react'
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
  const { listBoxProps } = useListBox(listBoxOptions, state, listBoxRef)

  const renderNode = (node: any): JSX.Element => {
    if (node.type === 'section') {
      return node.rendered && <ListSection section={node} state={state} />
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
