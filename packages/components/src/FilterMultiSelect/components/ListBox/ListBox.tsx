import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { ItemType } from "../../../__future__/select/src/types"
import { useSelectionContext } from "../../provider/SelectionProvider"
import styles from "./ListBox.module.scss"

export interface ListBoxProps {
  children: (items: {
    selectedItems: Array<Node<ItemType>>
    unselectedItems: Array<Node<ItemType>>
    disabledItems: Array<Node<ItemType>>
    allItems: Array<Node<ItemType>>
    hasNoItems: boolean
  }) => React.ReactNode
}

export const ListBox = ({ children }: ListBoxProps): JSX.Element => {
  const { listBoxProps, listRef, selectionState } = useSelectionContext()
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
    disabledKeys,
    selectionManager: { selectedKeys },
  } = selectionState
  const disabledItems = Array.from(disabledKeys)
    .map(key => items.getItem(key))
    .filter(item => item !== undefined)
  const selectedItems = Array.from(selectedKeys)
    .map(key => items.getItem(key))
    .filter(item => item !== undefined)
  const unselectedItems = Array.from(items).filter(
    item => !disabledKeys.has(item.key) && !selectedKeys.has(item.key)
  )
  const allItems = Array.from(items)
  const hasNoItems = allItems.length === 0

  const [itemsState, setItemsState] = useState({
    selectedItems,
    unselectedItems,
    disabledItems,
    allItems,
    hasNoItems,
  })

  // Only update rendering of items when filtering.
  // Avoids re-ordering of items when making a selection
  useEffect(() => {
    setItemsState({
      selectedItems,
      disabledItems,
      unselectedItems,
      allItems,
      hasNoItems,
    })
  }, [selectionState.collection.size])

  if (hasNoItems) {
    return (
      <>
        <div>{children(itemsState)}</div>
        {/* This ul with the ref needs to exist otherwise it fatals */}
        <ul ref={listRef} className={styles.hidden} />
      </>
    )
  }

  return (
    <ul
      {...listBoxProps}
      ref={listRef}
      className={classNames(
        styles.listBox,
        isOverflown ? styles.overflown : null
      )}
    >
      {children(itemsState)}
    </ul>
  )
}

ListBox.displayName = "ListBox"
