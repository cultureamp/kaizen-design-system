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
import { MenuPopup } from "./MenuPopup"

export interface SelectOptionMenuTrigger {
  label?: string
}
export function MenuButton(props: SelectOptionMenuTrigger) {
  // Create state based on the incoming props
  const state = useMenuTriggerState({})

  // Get props for the menu trigger and menu elements
  const ref = React.createRef<HTMLButtonElement>()
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)

  // Get props for the button based on the trigger props from useMenuTrigger
  const { buttonProps } = useButton(menuTriggerProps, ref)

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button {...buttonProps} ref={ref} style={{ height: 30, fontSize: 14 }}>
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </button>
      {state.isOpen && (
        <MenuPopup {...props} {...menuProps} onClose={() => state.close()} />
      )}
    </div>
  )
}
