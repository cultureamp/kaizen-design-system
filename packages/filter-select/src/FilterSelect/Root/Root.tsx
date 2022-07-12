import React from "react"
import { useMenuTriggerState } from "@react-stately/menu"
import { useButton } from "@react-aria/button"
import { useMenuTrigger } from "@react-aria/menu"
import { Item } from "@react-stately/collections"
import { SelectionMode, Selection } from "@react-types/shared"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
} from "../provider/MenuTriggerProvider"
import { MenuPopup } from "../MenuPopup/MenuPopup"
import {
  SelectionConsumer,
  SelectionProvider,
  SelectionProviderContextType,
} from "../provider/SelectionProvider"
import { ItemType } from "../type"

export interface RootProps {
  label: string // A11y requirement for listbox
  items: ItemType[]
  trigger: (value: MenuTriggerProviderContextType) => React.ReactNode
  children: (value: SelectionProviderContextType) => React.ReactNode // The content of the menu
  defaultOpen?: boolean

  selectedKeys?: Selection
  onSelectionChange?: (keys: Selection) => void
  selectionMode?: SelectionMode
}

export type FilterSelectProps = RootProps

export const Root = ({
  label,
  items,
  trigger,
  children,
  defaultOpen = false,

  selectedKeys,
  onSelectionChange,
  selectionMode = "multiple",
}: RootProps) => {
  // Create state based on the incoming props
  const state = useMenuTriggerState({ defaultOpen })

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
      <div>
        <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>

        {state.isOpen && (
          <MenuPopup {...menuProps} onClose={() => state.close()}>
            <SelectionProvider
              items={items}
              autoFocus // TODO: should we allow autoFocus on list?
              selectionMode={selectionMode}
              renderItems={item => <Item key={item.value}>{item.label}</Item>}
              label={label}
              selectedKeys={selectedKeys}
              onSelectionChange={onSelectionChange}
            >
              <SelectionConsumer>{children}</SelectionConsumer>
            </SelectionProvider>
          </MenuPopup>
        )}
      </div>
    </MenuTriggerProvider>
  )
}
