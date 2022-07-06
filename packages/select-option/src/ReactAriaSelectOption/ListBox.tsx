import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react"
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
  Selection,
} from "@react-types/shared"
import { useListBox, useOption } from "@react-aria/listbox"
import { ListProps, ListState, useListState } from "@react-stately/list"
import { ItemType } from "../type"
import { ListBoxProvider } from "../provider/ListBoxProvider"
import { Option } from "./Option"

export interface SelectOptionListBoxProps {
  selectionMode: SelectionMode
  children: React.ReactNode // control how menu should look like
  autoFocus?: boolean | FocusStrategy
  items: ItemType[]
  childrenItems: CollectionChildren<ItemType> // for useListState to initialise selection, can be only Item or Section
  onSelectionChange?: (keys: Selection) => void
}

// TODO: Naming of ListBox is not great here, as its more like a selection manager center
export function ListBox({ childrenItems, ...props }: SelectOptionListBoxProps) {
  const [searchQuery, setSearchQuery] = useState<string | undefined>()

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = e => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const searchFilter = useCallback(
    (nodes: Iterable<Node<ItemType>>): Iterable<Node<ItemType>> =>
      searchQuery
        ? Array.from(nodes).filter(f =>
            f.textValue.toLowerCase().includes(searchQuery)
          )
        : nodes,
    [searchQuery]
  )

  // useListState -> Selection
  const state = useListState({
    ...props,
    disallowEmptySelection: true, // stop escape key from clearing selection
    children: childrenItems,
    filter: searchFilter,
  })

  // useListBox -> A11y
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps, labelProps } = useListBox(props, state, ref)

  return (
    <ListBoxProvider
      listBoxProps={listBoxProps}
      labelProps={labelProps}
      selectionState={state}
      listRef={ref}
      handleSearch={handleSearch}
    >
      {props.children}
    </ListBoxProvider>
  )
}
