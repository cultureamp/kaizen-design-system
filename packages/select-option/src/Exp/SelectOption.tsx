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
import { useListBox, useOption } from "@react-aria/listbox"
import { ListState, useListState } from "@react-stately/list"
import { Selection } from "@react-types/shared"
import { MenuPopup } from "./MenuPopup"
import { ItemType } from "./type"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
} from "./provider/MenuTriggerProvider"
import { Option } from "./Option"
import { ListBox } from "./ListBox"
import {
  ListBoxConsumer,
  ListBoxProviderContextType,
} from "./provider/ListBoxProvider"

export interface SelectOptionProps {
  label: string // A11y requirement for listbox
  items: ItemType[]
  trigger: (value: MenuTriggerProviderContextType) => React.ReactNode
  children: (value: ListBoxProviderContextType) => React.ReactNode // The content of the menu
  onSelectionChange?: (keys: Selection) => void
}
export function SelectOption({ trigger, ...props }: SelectOptionProps) {
  // Create state based on the incoming props
  const state = useMenuTriggerState({})

  // Get props for the menu trigger and menu elements
  const ref = React.createRef<HTMLButtonElement>()
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref)

  // Get props for the button based on the trigger props from useMenuTrigger
  const { buttonProps } = useButton(menuTriggerProps, ref)

  return (
    <MenuTriggerProvider
      menuTriggerProps={menuTriggerProps}
      menuProps={menuProps}
      buttonProps={buttonProps}
      menuTiggerState={state}
      buttonRef={ref}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>

        {state.isOpen && (
          <MenuPopup
            isOpen={state.isOpen}
            {...props}
            {...menuProps}
            onClose={() => state.close()}
          >
            <ListBox
              selectionMode="multiple"
              items={props.items}
              onSelectionChange={props.onSelectionChange}
              childrenItems={item => <Item key={item.value}>{item.label}</Item>}
              // TODO: fix this elint disable
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            >
              <ListBoxConsumer>{props.children}</ListBoxConsumer>
            </ListBox>
          </MenuPopup>
        )}
      </div>
    </MenuTriggerProvider>
  )
}
