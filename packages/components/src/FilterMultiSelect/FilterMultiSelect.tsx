import { ListBox } from "./subcomponents/ListBox"
import { ListBoxSection } from "./subcomponents/ListBoxSection"
import { LoadMoreButton } from "./subcomponents/LoadMoreButton"
import { MenuFooter, MenuLoadingSkeleton } from "./subcomponents/MenuLayout"
import { MultiSelectOption } from "./subcomponents/MultiSelectOption"
import { NoResults } from "./subcomponents/NoResults"
import { Root, RootProps } from "./subcomponents/Root"
import { SearchInput } from "./subcomponents/SearchInput/SearchInput"
import { SectionDivider } from "./subcomponents/SectionDivider"
import {
  ClearButton,
  SelectAllButton,
} from "./subcomponents/SelectionControlButton"
import {
  FilterTriggerButton,
  RemovableFilterTrigger,
} from "./subcomponents/Trigger"

export type FilterMultiSelectProps = RootProps

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
