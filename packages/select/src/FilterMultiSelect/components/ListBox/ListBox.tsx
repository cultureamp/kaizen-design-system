import React from "react"
import { Node } from "@react-types/shared"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../FilterMultiSelect"
import styles from "./ListBox.scss"

export interface ListBoxProps {
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = ({ children }) => {
  const { listBoxProps, listRef, selectionState } = useSelectionContext()
  return (
    <ul {...listBoxProps} ref={listRef} className={styles.listBox}>
      {Array.from(selectionState.collection).map(item =>
        // pass item to render children
        children(item)
      )}
    </ul>
  )
}

ListBox.displayName = "ListBox"
