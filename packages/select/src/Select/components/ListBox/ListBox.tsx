import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import styles from "./ListBox.module.scss"

export interface ListBoxProps {
  children: (items: Array<Node<ItemType>>) => React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = ({ children }) => {
  const { listBoxProps, listRef, selectionState } = useSelectionContext()

  const items = Array.from(selectionState.collection)

  return (
    <ul
      {...listBoxProps}
      ref={listRef}
      className={classNames([styles.listBox])}
    >
      {children(items)}
    </ul>
  )
}

ListBox.displayName = "ListBox"
