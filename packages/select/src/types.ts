import { SelectState } from "@react-stately/select"

export type ValueType = React.Key

export interface ItemType {
  label: string
  value: ValueType
  count?: string
  isDisabled?: boolean
}

export interface SingleItemType {
  label: string
  value: ValueType
}

export type SingleState = {
  state: SelectState<SingleItemType>
}

// types from @react-aria/@react-stately/@react-types that consumer might use goes here
export type { Selection } from "@react-types/shared"
