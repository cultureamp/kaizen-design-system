import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import styles from "./ListBox.scss"

export interface ListBoxProps {
  children: (
    disabledItems: Array<Node<ItemType>>,
    selectedItems: Array<Node<ItemType>>,
    unselectedItems: Array<Node<ItemType>>
  ) => React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = ({ children }) => {
  const { listBoxProps, listRef, selectionState } = useSelectionContext()
  const [isOverflown, setIsOverflown] = useState(false)
  useEffect(() => {
    const listElement = listRef.current
    if (!listElement) {
      return
    }
    setIsOverflown(listElement.scrollHeight > listElement.clientHeight)
  }, [listRef])
  // TODO Move to util functions
  const items = selectionState.collection
  const disabledKeys = selectionState.disabledKeys
  const selectedKeys = selectionState.selectionManager.selectedKeys
  const disabledItems = Array.from(disabledKeys).map(key => items.getItem(key))
  const selectedItems = Array.from(selectedKeys).map(key => items.getItem(key))
  const unselectedItems = Array.from(items).filter(
    item => !disabledKeys.has(item.key) && !selectedKeys.has(item.key)
  )

  return (
    <ul
      {...listBoxProps}
      ref={listRef}
      className={classNames(
        styles.listBox,
        isOverflown ? styles.overflown : null
      )}
    >
      {/* {Array.from(selectionState.collection).map(item =>
        // pass item to render children
        children(item)
      )} */}
      {children(disabledItems, selectedItems, unselectedItems)}
    </ul>
  )
}

ListBox.displayName = "ListBox"
