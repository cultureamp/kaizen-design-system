import React, { useState, useEffect } from "react"
import { Collection } from "@react-types/shared"
import classnames from "classnames"
import { useSelectionContext } from "../../context/SelectionProvider"
import { MultiSelectItem } from "../../types"
import styles from "./ListBox.module.scss"

export type ListBoxItems = {
  selectedItems: MultiSelectItem[]
  unselectedItems: MultiSelectItem[]
  disabledItems: MultiSelectItem[]
  allItems: MultiSelectItem[]
  hasNoItems: boolean
}

export type ListBoxProps = {
  children: (items: ListBoxItems) => React.ReactNode
}

const getItemsFromKeys = (
  items: Collection<MultiSelectItem>,
  keys: Set<React.Key>
): MultiSelectItem[] => {
  const itemKeys = Array.from(keys)
  return itemKeys.reduce<MultiSelectItem[]>((acc, itemKey) => {
    const item = items.getItem(itemKey)
    return item ? [...acc, item] : acc
  }, [])
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

  const disabledItems = getItemsFromKeys(items, disabledKeys)
  const selectedItems = getItemsFromKeys(items, selectedKeys)

  const unselectedItems = Array.from(items).filter(
    item => !disabledKeys.has(item.key) && !selectedKeys.has(item.key)
  )
  const allItems = Array.from(items)
  const hasNoItems = allItems.length === 0

  const [itemsState, setItemsState] = useState<ListBoxItems>({
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
        <div className={styles.noResultsWrapper}>{children(itemsState)}</div>
        {/* This ul with the ref needs to exist otherwise it fatals */}
        <ul ref={listRef} className={styles.hidden} />
      </>
    )
  }

  return (
    <ul
      {...listBoxProps}
      ref={listRef}
      className={classnames(styles.listBox, isOverflown && styles.overflown)}
    >
      {children(itemsState)}
    </ul>
  )
}

ListBox.displayName = "FilterMultiSelect.ListBox"
