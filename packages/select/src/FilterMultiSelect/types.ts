export type ValueType = React.Key
export interface ItemType {
  label: string
  value: ValueType
  count?: string
}

// types from @react-aria/@react-stately/@react-types that consumer might use goes here
export type { Selection } from "@react-types/shared"
