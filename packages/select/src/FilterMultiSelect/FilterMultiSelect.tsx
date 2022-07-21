import { ListBox } from "./components/ListBox"
import { MenuFooter } from "./components/MenuLayout"
import { MultiSelectOption } from "./components/MultiSelectOption"
import { Root } from "./components/Root"
import { SearchInput } from "./components/SearchInput/SearchInput"
import {
  ClearButton,
  SelectAllButton,
} from "./components/SelectionControlButton"
import { TruncatedLabelTriggerButton } from "./components/TriggerButton"

export const FilterMultiSelect = Object.assign(Root, {
  TruncatedLabelTriggerButton,
  SearchInput,
  ListBox,
  MultiSelectOption,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
})

export type { TruncatedLabelTriggerButtonProps } from "./components/TriggerButton"
export type { SearchInputProps } from "./components/SearchInput"
export type { ListBoxProps } from "./components/ListBox"
export type { MultiSelectOptionProps } from "./components/MultiSelectOption"

// TODO: do we want to move them to shared?
export type ValueType = React.Key
export interface ItemType {
  label: string
  value: ValueType
  count?: string
}

export * from "./provider"

// TODO: might be more types from @react-X to export, do we have a strategy for this case?
export type { Selection } from "@react-types/shared"
