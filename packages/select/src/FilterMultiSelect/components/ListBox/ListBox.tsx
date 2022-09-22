import React, { useState, useEffect, useRef, useCallback } from "react"
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

  // const itemsRef = useRef({ selectedItems, disabledItems, unselectedItems })

  // const renderChildren = useCallback(
  //   () =>
  //     children(
  //       itemsRef.current.disabledItems,
  //       itemsRef.current.selectedItems,
  //       itemsRef.current.unselectedItems
  //     ),
  //   [itemsRef.current]
  // )

  return (
    <ul
      {...listBoxProps}
      ref={listRef}
      className={classNames(
        styles.listBox,
        isOverflown ? styles.overflown : null
      )}
    >
      {children(selectedItems, unselectedItems, disabledItems)}
      {/* {renderChildren()} */}
    </ul>
  )
}

ListBox.displayName = "ListBox"
