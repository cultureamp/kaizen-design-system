import React from "react"
import { SelectionMode, Selection } from "@react-types/shared"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
} from "../../provider/MenuTriggerProvider"
import { MenuPopup } from "../MenuPopup/MenuPopup"
import {
  SelectionConsumer,
  SelectionProvider,
  SelectionProviderContextType,
} from "../../provider/SelectionProvider"
import { ItemType } from "../../FilterMultiSelect"

export interface RootProps extends MenuTriggerProps, SelectionProps {
  trigger: (value: MenuTriggerProviderContextType) => React.ReactNode
  children: (value: SelectionProviderContextType) => React.ReactNode // The content of the menu
}

interface MenuTriggerProps {
  defaultOpen?: boolean
}

interface SelectionProps {
  label: string // A11y requirement for listbox
  items: ItemType[]
  selectedKeys?: Selection
  onSelectionChange?: (keys: Selection) => void
  selectionMode?: SelectionMode
}

export type FilterMultiSelectProps = RootProps

export const Root: React.VFC<RootProps> = ({
  trigger,
  children,

  defaultOpen = false,

  label,
  items,
  selectedKeys,
  onSelectionChange,
  selectionMode = "multiple",
}) => {
  const menuTriggerProps = { defaultOpen }
  const selectionProps = {
    label,
    items,
    selectedKeys,
    onSelectionChange,
    selectionMode,
  }
  return (
    <MenuTriggerProvider {...menuTriggerProps}>
      <div>
        {/* TODO: keep the consumer or remove it? */}
        <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>
        <MenuPopup>
          <SelectionProvider {...selectionProps}>
            {/* TODO: keep the consumer or remove it? */}
            <SelectionConsumer>{children}</SelectionConsumer>
          </SelectionProvider>
        </MenuPopup>
      </div>
    </MenuTriggerProvider>
  )
}

Root.displayName = "Root"
