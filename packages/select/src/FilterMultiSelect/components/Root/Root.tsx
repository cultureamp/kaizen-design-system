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
import { ItemType } from "../../type"

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

export type FilterMultiSelectProps = RootProps

export const Root: React.VFC<RootProps> = ({
  label,
  items,
  trigger,
  children,
  defaultOpen = false,

  selectedKeys,
  onSelectionChange,
  selectionMode = "multiple",
}) => (
  <MenuTriggerProvider defaultOpen={defaultOpen}>
    <div>
      {/* TODO: keep the consumer or remove it? */}
      <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>
      <MenuPopup>
        <SelectionProvider
          items={items}
          selectionMode={selectionMode}
          label={label}
          selectedKeys={selectedKeys}
          onSelectionChange={onSelectionChange}
        >
          {/* TODO: keep the consumer or remove it? */}
          <SelectionConsumer>{children}</SelectionConsumer>
        </SelectionProvider>
      </MenuPopup>
    </div>
  </MenuTriggerProvider>
)

Root.displayName = "Root"
