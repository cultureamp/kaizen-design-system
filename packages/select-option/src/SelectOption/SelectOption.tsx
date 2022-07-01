import { ListBox } from "./component/ListBox"
import { Root } from "./component/Root"
import { Trigger } from "./component/Trigger"
import { Option } from "./component/Option"

// Pattern copied from HeadlessUI: https://github.com/tailwindlabs/headlessui/blob/6253aa52b3801e84331450a651bb41328ffa7239/packages/%40headlessui-react/src/components/listbox/listbox.tsx#L890
export const SelectOption = Object.assign(Root, { Trigger, ListBox, Option })
