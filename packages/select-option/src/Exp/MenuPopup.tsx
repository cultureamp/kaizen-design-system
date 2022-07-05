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
import { ListBox } from "./ListBox"

export interface MenuPopupProps {
  onClose: () => void
}

export function MenuPopup(props: MenuPopupProps): JSX.Element {
  // Handle events that should cause the menu to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const overlayRef = React.createRef<HTMLDivElement>()
  const { overlayProps } = useOverlay(
    {
      onClose: props.onClose,
      shouldCloseOnBlur: true,
      isOpen: true,
      isDismissable: true,
    },
    overlayRef
  )

  const items: ItemType[] = [
    { label: "Front-End", value: "id-fe" },
    { label: "Back-End", value: "id-be" },
    { label: "Site reliability", value: "id-sre" },
  ]
  const [searchQuery, setSearchQuery] = useState<string | undefined>()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    // if (!e.target.value) {
    //   setItems(defualt)
    //   return
    // }
    setSearchQuery(e.target.value.toLowerCase())
    // setItems(value =>
    //   value.filter(f =>
    //     f.label.toLowerCase().includes(e.target.value.toLowerCase())
    //   )
    // )
  }

  // TODO: useMemo
  const searchFilter = (
    nodes: Iterable<Node<ItemType>>
  ): Iterable<Node<ItemType>> =>
    searchQuery
      ? Array.from(nodes).filter(f =>
          f.textValue.toLowerCase().includes(searchQuery)
        )
      : nodes

  // Wrap in <FocusScope> so that focus is restored back to the
  // trigger when the menu is closed. In addition, add hidden
  // <DismissButton> components at the start and end of the list
  // to allow screen reader users to dismiss the popup easily.
  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={overlayRef}>
        <DismissButton onDismiss={props.onClose} />
        <input type="search" placeholder="Search...." onChange={handleChange} />
        <ListBox
          selectionMode="multiple"
          // TODO: fix this elint disable
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          filter={searchFilter}
          items={items}
        >
          {item => <Item key={item.value}>{item.label}</Item>}
        </ListBox>
        <DismissButton onDismiss={props.onClose} />
      </div>
    </FocusScope>
  )
}
