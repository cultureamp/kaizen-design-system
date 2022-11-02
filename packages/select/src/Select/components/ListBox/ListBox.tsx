import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import styles from "./ListBox.module.scss"

export interface ListBoxProps {
  children: (items: {
    selectedItems: Array<Node<ItemType>>
    unselectedItems: Array<Node<ItemType>>
    allItems: Array<Node<ItemType>>
  }) => React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = ({ children }) => {
  const { listBoxProps, listRef, selectionState, id } = useSelectionContext()
  const [isOverflown, setIsOverflown] = useState(false)
  useEffect(() => {
    const listElement = listRef.current
    if (!listElement) {
      return
    }
    setIsOverflown(listElement.scrollHeight > listElement.clientHeight)
  }, [listRef])

  const {
    collection: items,
    selectionManager: { selectedKeys },
  } = selectionState

  const selectedItems = Array.from(selectedKeys)
    .map(key => items.getItem(key))
    .filter(item => item !== undefined)

  const unselectedItems = Array.from(items).filter(
    item => !selectedKeys.has(item.key)
  )
  const allItems = Array.from(items)

  return (
    <ul
      {...listBoxProps}
      id={id}
      ref={listRef}
      className={classNames([styles.listBox, isOverflown && styles.overflown])}
    >
      {children({ selectedItems, unselectedItems, allItems })}
    </ul>
  )
}

ListBox.displayName = "ListBox"
