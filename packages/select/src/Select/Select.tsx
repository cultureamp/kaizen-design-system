import { Root } from "./components/Root"
import { SingleTriggerButton } from "./components/Trigger/SingleTriggerButton"
import { ListBox } from "./components/ListBox"
import { Option } from "./components/Option"

export const Select = Object.assign(Root, {
  TriggerButton: SingleTriggerButton,
  ListBox,
  Option,
})

Select.displayName = "Select"
