import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import styles from "./ListBox.scss"

export interface ListBoxProps {
  children: (item: Node<ItemType>) => React.ReactNode
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

  return (
    <ul
      {...listBoxProps}
      ref={listRef}
      className={classNames(
        styles.listBox,
        isOverflown ? styles.overflown : null
      )}
    >
      {Array.from(selectionState.collection).map(item =>
        // pass item to render children
        children(item)
      )}
    </ul>
  )
}

ListBox.displayName = "ListBox"
