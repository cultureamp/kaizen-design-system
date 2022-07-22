import { ListBox } from "./components/ListBox"
import { MenuFooter } from "./components/MenuLayout"
import { MultiSelectOption } from "./components/MultiSelectOption"
import { Root } from "./components/Root"
import { SearchInput } from "./components/SearchInput/SearchInput"
import {
  ClearButton,
  SelectAllButton,
} from "./components/SelectionControlButton"
import {
  FilterTriggerButton,
  RemovableFilterTrigger,
} from "./components/Trigger"

export const FilterMultiSelect = Object.assign(Root, {
  TriggerButton: FilterTriggerButton,
  RemovableTrigger: RemovableFilterTrigger,
  SearchInput,
  ListBox,
  Option: MultiSelectOption,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
})

// Here only export component props as we would like to enforce consumer to use dot notation component.
export * from "./components"
export * from "./provider"
export * from "./types"
export { getSelectedOptionLabels, getSelectedOptionKeys } from "./utils"
