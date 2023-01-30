import React from "react"
import { SelectionMode, Selection } from "@react-types/shared"
import { ItemType } from "../../../types"
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
import { MenuPopup, MenuPopupProps } from "../MenuPopup/MenuPopup"

export interface RootProps
  extends Omit<MenuPopupProps, "children">,
    MenuTriggerProps,
    SelectionProps {
  children: (value?: SelectionProviderContextType) => React.ReactNode // the content of the menu
  trigger: (value?: MenuTriggerProviderContextType) => React.ReactNode
}

type MenuTriggerProps = Omit<MenuTriggerProviderProps, "children">

interface SelectionProps {
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKeys?: Selection
  onSelectionChange?: (keys: Selection) => void
  selectionMode?: SelectionMode
  onSearchInputChange?: (searchInput: string) => void
}

export type FilterMultiSelectProps = RootProps

export const Root = ({
  trigger,
  children,
  isOpen,
  defaultOpen,
  onOpenChange,
  isLoading,
  loadingSkeleton,
  alignPopup,

  label,
  items,
  selectedKeys,
  onSelectionChange,
  selectionMode = "multiple",
  onSearchInputChange,
}: RootProps): JSX.Element => {
  const menuTriggerProps = { isOpen, defaultOpen, onOpenChange }
  const menuPopupProps = { isLoading, loadingSkeleton, alignPopup }
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
      <div className="relative">
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
