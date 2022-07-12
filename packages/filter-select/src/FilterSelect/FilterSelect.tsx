import { ListBox } from "./ListBox/ListBox"
import { MenuFooter } from "./MenuLayout/MenuFooter"
import { MultiSelectOption } from "./Option/MultiSelectOption"
import { Root } from "./Root/Root"
import { SearchInput } from "./SearchInput/SearchInput"
import { ClearButton } from "./SelectionControlButton/ClearButton"
import { SelectAllButton } from "./SelectionControlButton/SelectAllButton"
import { TriggerButton } from "./TriggerButton/TriggerButton"

export const FilterSelect = Object.assign(Root, {
  TriggerButton,
  SearchInput,
  ListBox,
  MultiSelectOption,
  SelectAllButton,
  ClearButton,
  MenuFooter, // For layout
})
