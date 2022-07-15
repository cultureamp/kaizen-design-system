import { ListBox } from "./components/ListBox"
import { MenuFooter } from "./components/MenuLayout"
import { MultiSelectOption } from "./components/MultiSelectOption"
import { Root } from "./components/Root"
import { SearchInput } from "./components/SearchInput/SearchInput"
import {
  ClearButton,
  SelectAllButton,
} from "./components/SelectionControlButton"
import { TriggerButton } from "./components/TriggerButton"

export const FilterMultiSelect = Object.assign(Root, {
  TriggerButton,
  SearchInput,
  ListBox,
  MultiSelectOption,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
})

export type { TriggerButtonProps } from "./components/TriggerButton"
export type { SearchInputProps } from "./components/SearchInput"
export type { ListBoxProps } from "./components/ListBox"
export type { MultiSelectOptionProps } from "./components/MultiSelectOption"
export type { ItemType, ValueType } from "./type" // TODO: do we want to move them to shared?

export * from "./provider"
