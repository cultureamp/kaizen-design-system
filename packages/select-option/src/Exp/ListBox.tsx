import React, { ReactNode, useState } from "react"
import { useMenuTriggerState } from "@react-stately/menu"
import { useButton } from "@react-aria/button"
import { useMenu, useMenuItem, useMenuTrigger } from "@react-aria/menu"
import { useTreeState } from "@react-stately/tree"
import { Item, Section } from "@react-stately/collections"
import { mergeProps } from "@react-aria/utils"
import { FocusScope, useFocusRing } from "@react-aria/focus"
import { useFocus } from "@react-aria/interactions"
import { useOverlay, DismissButton } from "@react-aria/overlays"
import {
  CollectionChildren,
  SelectionMode,
  FocusStrategy,
  Node,
} from "@react-types/shared"
import { useListBox, useOption } from "@react-aria/listbox"
import { ListState, useListState } from "@react-stately/list"
import { ItemType } from "./type"
import { Option } from "./Option"
export interface SelectOptionListBoxProps {
  selectionMode: SelectionMode
  children: CollectionChildren<ItemType> // can be only Item or Section
  autoFocus?: boolean | FocusStrategy
  filter?: (nodes: Iterable<Node<ItemType>>) => Iterable<Node<ItemType>>
  items: ItemType[]
}
export function ListBox(props: SelectOptionListBoxProps) {
  // ListProps -> MultipleSelection
  const state = useListState(props)
  const ref = React.createRef<HTMLUListElement>()

  // ListBoxProps -> A11y
  const { listBoxProps } = useListBox(props, state, ref)

  return (
    <>
      <ul
        {...listBoxProps}
        ref={ref}
        style={{
          padding: 0,
          margin: "5px 0",
          listStyle: "none",
          border: "1px solid gray",
          maxWidth: 250,
        }}
      >
        {Array.from(state.collection).map(item => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
      <button onClick={() => state.selectionManager.selectAll()}>
        Select All
      </button>
      <button onClick={() => state.selectionManager.clearSelection()}>
        Clear
      </button>
    </>
  )
}
