import { Node } from "@react-types/shared"

export type ValueType = React.Key

export type ItemType = {
  label: string
  value: ValueType
  count?: string
  isDisabled?: boolean
}

export type MultiSelectItem = Node<ItemType>
