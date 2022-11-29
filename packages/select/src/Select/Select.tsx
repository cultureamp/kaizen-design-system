import { ListBox } from "./components/ListBox"
import { Option } from "./components/Option"
import { Root } from "./components/Root"
import { TriggerButton } from "./components/Trigger"

export const Select = Object.assign(Root, {
  TriggerButton,
  ListBox,
  Option,
})

Select.displayName = "Select"
