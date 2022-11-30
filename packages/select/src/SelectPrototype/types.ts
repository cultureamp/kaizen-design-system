import { SelectState } from "@react-stately/select"

export type ValueType = React.Key
export interface ItemType {
  label: string
  value: ValueType
}

export type State = {
  state: SelectState<ItemType>
}
