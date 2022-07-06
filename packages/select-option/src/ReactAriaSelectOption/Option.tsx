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
import { ItemType } from "../type"

export interface OptionProps {
  item: Node<ItemType>
  state: ListState<ItemType>
}

export function Option({ item, state }: OptionProps): JSX.Element {
  // Get props for the option element
  const ref = React.createRef<HTMLLIElement>()
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  )

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected ? "blueviolet" : "transparent",
        color: isSelected ? "white" : undefined,
        padding: "2px 5px",
        outline: isFocusVisible ? "2px solid orange" : "none",
      }}
    >
      {item.rendered}
    </li>
  )
}
