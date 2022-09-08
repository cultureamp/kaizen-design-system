import { ListBox } from "./components/ListBox"
import { ListBoxSection } from "./components/ListBoxSection"
import { MenuFooter, MenuLoadingSkeleton } from "./components/MenuLayout"
import { MultiSelectOption } from "./components/MultiSelectOption"
import { MultiSelectOptionNode } from "./components/MultiSelectOptionNode"
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
  OptionNode: MultiSelectOptionNode,
  Option: MultiSelectOption,
  Section: ListBoxSection,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
  MenuLoadingSkeleton, // Menu Loading Skeleton example
})
