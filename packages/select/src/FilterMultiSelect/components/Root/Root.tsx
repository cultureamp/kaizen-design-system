import React from "react"
import { SelectionMode, Selection } from "@react-types/shared"
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
import { MenuPopup } from "../MenuPopup/MenuPopup"

export interface RootProps
  extends MenuPopupProps,
    MenuTriggerProps,
    SelectionProps {
  trigger: (value?: MenuTriggerProviderContextType) => React.ReactNode
  children: (value?: SelectionProviderContextType) => React.ReactNode // the content of the menu
}

type MenuTriggerProps = Omit<MenuTriggerProviderProps, "children">

interface MenuPopupProps {
  isLoading?: boolean
  loadingSkeleton?: React.ReactNode
}

interface SelectionProps {
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKeys?: Selection
  onSelectionChange?: (keys: Selection) => void
  selectionMode?: SelectionMode
  onSearchInputChange?: (searchInput: string) => void
}

export type FilterMultiSelectProps = RootProps

export const Root: React.VFC<RootProps> = ({
  trigger,
  children,
  isOpen,
  defaultOpen,
  onOpenChange,
  isLoading,
  loadingSkeleton,

  label,
  items,
  selectedKeys,
  onSelectionChange,
  selectionMode = "multiple",
  onSearchInputChange,
}) => {
  const menuTriggerProps = { isOpen, defaultOpen, onOpenChange }
  const menuPopupProps = { isLoading, loadingSkeleton }
  const disabledKeys: Selection = new Set(
    items
      ?.filter(item => item.isDisabled === true)
      .map(disabledItem => disabledItem.value)
  )
  const selectionProps = {
    label,
    items,
    selectedKeys,
    onSelectionChange,
    selectionMode,
    disabledKeys,
    onSearchInputChange,
  }

  return (
    <MenuTriggerProvider {...menuTriggerProps}>
      <div>
        <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>
        <MenuPopup {...menuPopupProps}>
          <SelectionProvider {...selectionProps}>
            <SelectionConsumer>{children}</SelectionConsumer>
          </SelectionProvider>
        </MenuPopup>
      </div>
    </MenuTriggerProvider>
  )
}

Root.displayName = "Root"
