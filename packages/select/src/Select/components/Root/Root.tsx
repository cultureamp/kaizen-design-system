import React, { Key } from "react"
import { Label } from "@kaizen/draft-form"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
  MenuTriggerProviderProps,
} from "../../provider/MenuTriggerProvider"
import {
  SelectionConsumer,
  SelectionProvider,
  SelectionProviderContextType,
} from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import { MenuPopup } from "../MenuPopup"

export interface RootProps extends MenuTriggerProps, SelectionProps {
  trigger: (value?: MenuTriggerProviderContextType) => React.ReactNode
  children: (value?: SelectionProviderContextType) => React.ReactNode // the content of the menu
}

type MenuTriggerProps = Omit<MenuTriggerProviderProps, "children">

interface SelectionProps {
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKey?: Key | null
  onSelectionChange?: (key: Key) => void
}

export type FilterMultiSelectProps = RootProps

export const Root: React.VFC<RootProps> = ({
  trigger,
  children,
  isOpen,
  defaultOpen,
  onOpenChange,
  label,
  items,
  selectedKey,
  onSelectionChange,
}) => {
  const menuTriggerProps = { isOpen, defaultOpen, onOpenChange }

  const selectionProps = {
    label,
    items,
    selectedKey,
    onSelectionChange,
  }

  return (
    <>
      <Label>{label}</Label>
      <MenuTriggerProvider {...menuTriggerProps}>
        <div>
          <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>
          <MenuPopup>
            <SelectionProvider {...selectionProps}>
              <SelectionConsumer>{children}</SelectionConsumer>
            </SelectionProvider>
          </MenuPopup>
        </div>
      </MenuTriggerProvider>
    </>
  )
}

Root.displayName = "Root"
