import React from "react"
import { SelectionMode, Selection } from "@react-types/shared"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
  MenuTriggerProviderProps,
  SelectionConsumer,
  SelectionProvider,
  SelectionProviderContextType,
} from "./context"
import { ListBox } from "./subcomponents/ListBox"
import { ListBoxSection } from "./subcomponents/ListBoxSection"
import { LoadMoreButton } from "./subcomponents/LoadMoreButton"
import { MenuFooter, MenuLoadingSkeleton } from "./subcomponents/MenuLayout"
import { MenuPopup, MenuPopupProps } from "./subcomponents/MenuPopup"
import { MultiSelectOption } from "./subcomponents/MultiSelectOption"
import { NoResults } from "./subcomponents/NoResults"
import { SearchInput } from "./subcomponents/SearchInput"
import { SectionDivider } from "./subcomponents/SectionDivider"
import {
  ClearButton,
  SelectAllButton,
} from "./subcomponents/SelectionControlButton"
import {
  FilterTriggerButton,
  RemovableFilterTrigger,
} from "./subcomponents/Trigger"
import { ItemType } from "./types"

type SelectionProps = {
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKeys?: Selection
  defaultSelectedKeys?: Selection
  onSelectionChange?: (keys: Selection) => void
  selectionMode?: SelectionMode
  onSearchInputChange?: (searchInput: string) => void
}

export type FilterMultiSelectProps = {
  trigger: (value?: MenuTriggerProviderContextType) => React.ReactNode
  children: (value?: SelectionProviderContextType) => React.ReactNode // the content of the menu
} & Omit<MenuPopupProps, "children"> &
  Omit<MenuTriggerProviderProps, "children"> &
  SelectionProps

export const FilterMultiSelect = ({
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
  defaultSelectedKeys,
  onSelectionChange,
  selectionMode = "multiple",
  onSearchInputChange,
}: FilterMultiSelectProps): JSX.Element => {
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
    defaultSelectedKeys,
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

FilterMultiSelect.displayName = "FilterMultiSelect"

FilterMultiSelect.TriggerButton = FilterTriggerButton
FilterMultiSelect.RemovableTrigger = RemovableFilterTrigger
FilterMultiSelect.SearchInput = SearchInput
FilterMultiSelect.ListBox = ListBox
FilterMultiSelect.ListBoxSection = ListBoxSection
FilterMultiSelect.SectionDivider = SectionDivider
FilterMultiSelect.Option = MultiSelectOption
FilterMultiSelect.SelectAllButton = SelectAllButton
FilterMultiSelect.ClearButton = ClearButton
FilterMultiSelect.MenuFooter = MenuFooter // For layout
FilterMultiSelect.MenuLoadingSkeleton = MenuLoadingSkeleton // Menu Loading Skeleton example
FilterMultiSelect.LoadMoreButton = LoadMoreButton
FilterMultiSelect.NoResults = NoResults
