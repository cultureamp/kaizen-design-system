import { ListBox } from "./components/ListBox"
import { ListBoxSection } from "./components/ListBoxSection"
import { LoadMoreButton } from "./components/LoadMoreButton"
import { MenuFooter, MenuLoadingSkeleton } from "./components/MenuLayout"
import { MultiSelectOption } from "./components/MultiSelectOption"
import { NoResults } from "./components/NoResults"
import { Root } from "./components/Root"
import { SearchInput } from "./components/SearchInput/SearchInput"
import { SectionDivider } from "./components/SectionDivider"
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
  ListBoxSection,
  SectionDivider,
  Option: MultiSelectOption,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
  MenuLoadingSkeleton, // Menu Loading Skeleton example
  LoadMoreButton,
  NoResults,
})

FilterMultiSelect.displayName = "FilterMultiSelect"
