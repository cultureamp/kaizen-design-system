import React from "react"
import { Node } from "@react-types/shared"
import { ListState } from "@react-stately/list"
import { useSelectionContext } from "../provider/SelectionProvider"
import { ItemType } from "../type"
import styles from "./ListBox.scss"

export interface ListBoxProps {
  children: (
    item: Node<ItemType>,
    selectionState: ListState<ItemType>
  ) => React.ReactNode
}
export const ListBox = ({ children }: ListBoxProps) => {
  const { listBoxProps, listRef, selectionState } = useSelectionContext()
  return (
    <ul {...listBoxProps} ref={listRef} className={styles.listBox}>
      {Array.from(selectionState.collection).map(item =>
        children(item, selectionState)
      )}
    </ul>
  )
}
