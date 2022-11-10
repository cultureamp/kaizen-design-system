import { ListBox } from "./components/ListBox"
import { ListBoxSection } from "./components/ListBoxSection"
import { SectionDivider } from "./components/SectionDivider"
import { MenuFooter, MenuLoadingSkeleton } from "./components/MenuLayout"
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
import { LoadMoreButton } from "./components/LoadMoreButton"

export const FilterMultiSelect = Object.assign(Root, {
  TriggerButton: FilterTriggerButton,
  RemovableTrigger: RemovableFilterTrigger,
  SearchInput,
  ListBox,
  ListBoxSection,
  SectionDivider,
  Option: MultiSelectOption,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
  MenuLoadingSkeleton, // Menu Loading Skeleton example
  LoadMoreButton,
})

FilterMultiSelect.displayName = "FilterMultiSelect"
