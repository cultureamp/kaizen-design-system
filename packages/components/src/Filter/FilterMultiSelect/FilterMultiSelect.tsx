import React from 'react'
import { type Selection, type SelectionMode } from '@react-types/shared'
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  SelectionConsumer,
  SelectionProvider,
  type MenuTriggerProviderContextType,
  type MenuTriggerProviderProps,
  type SelectionProviderContextType,
} from './context'
import { ListBox } from './subcomponents/ListBox'
import { ListBoxSection } from './subcomponents/ListBoxSection'
import { LoadMoreButton } from './subcomponents/LoadMoreButton'
import { MenuFooter, MenuLoadingSkeleton } from './subcomponents/MenuLayout'
import { MenuPopup, ResponsiveMenuPopup, type MenuPopupProps } from './subcomponents/MenuPopup'
import { MultiSelectOption } from './subcomponents/MultiSelectOption'
import { NoResults } from './subcomponents/NoResults'
import { SearchInput } from './subcomponents/SearchInput'
import { SectionDivider } from './subcomponents/SectionDivider'
import { ClearButton, SelectAllButton } from './subcomponents/SelectionControlButton'
import { FilterTriggerButton, RemovableFilterTrigger } from './subcomponents/Trigger'
import { type ItemType } from './types'

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
  /** A React component that replaces the MenuPopup. Should only be used for changing how the floating element is positioned, ie: with the `<ResponsiveMenuPopup />` primitive. */
  customMenuPopup?: React.ComponentType<MenuPopupProps>
  triggerRef?: React.RefObject<HTMLButtonElement>
  className?: string
} & Omit<MenuPopupProps, 'children'> &
  Omit<MenuTriggerProviderProps, 'children'> &
  SelectionProps

export const FilterMultiSelect = ({
  trigger,
  children,
  customMenuPopup,
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
  selectionMode = 'multiple',
  onSearchInputChange,
  triggerRef,
  className,
  ...restProps
}: FilterMultiSelectProps): JSX.Element => {
  const MenuComponent = customMenuPopup ?? MenuPopup
  const menuTriggerProps = { isOpen, defaultOpen, onOpenChange, triggerRef }
  const menuPopupProps = { isLoading, loadingSkeleton, ...restProps }
  const disabledKeys: Selection = new Set(
    items?.filter((item) => item.isDisabled === true).map((disabledItem) => disabledItem.value),
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
      <div className={className}>
        <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>
        <MenuComponent aria-label={label} {...menuPopupProps}>
          <SelectionProvider {...selectionProps}>
            <SelectionConsumer>{children}</SelectionConsumer>
          </SelectionProvider>
        </MenuComponent>
      </div>
    </MenuTriggerProvider>
  )
}

FilterMultiSelect.displayName = 'FilterMultiSelect'

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
FilterMultiSelect.ResponsiveMenuPopup = ResponsiveMenuPopup
