import { Root } from "./components/Root"
import { SingleTriggerButton } from "./components/Trigger/SingleTriggerButton"
import { ListBox } from "./components/ListBox"
import { Option } from "./components/Option"
import { HiddenSelectWrapper } from "./components/HiddenSelectWrapper"

export const Select = Object.assign(Root, {
  TriggerButton: SingleTriggerButton,
  ListBox,
  Option,
  HiddenSelect: HiddenSelectWrapper,
})

Select.displayName = "Select"
