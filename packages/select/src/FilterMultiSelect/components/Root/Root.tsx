import React from "react"
import { SelectionMode, Selection } from "@react-types/shared"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
  MenuTriggerProviderProps,
} from "../../provider/MenuTriggerProvider"
import { MenuPopup } from "../MenuPopup/MenuPopup"
import {
  SelectionConsumer,
  SelectionProvider,
  SelectionProviderContextType,
} from "../../provider/SelectionProvider"
import { ItemType } from "../../types"

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
  items?: ItemType[]
  selectedKeys?: Selection
  onSelectionChange?: (keys: Selection) => void
  selectionMode?: SelectionMode
  /**
   * Accepts a Set of item keys and disables them.
   * e.g disabledKeys={new Set(["id-be"])}
   */
  disabledKeys?: Selection
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
  disabledKeys,
}) => {
  const menuTriggerProps = { isOpen, defaultOpen, onOpenChange }
  const menuPopupProps = { isLoading, loadingSkeleton }
  const selectionProps = {
    label,
    items,
    selectedKeys,
    onSelectionChange,
    selectionMode,
    disabledKeys,
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
