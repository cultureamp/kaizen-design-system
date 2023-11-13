import { Key, Node } from "@react-types/shared"

export type ItemType = {
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}

export type MultiSelectItem = Node<ItemType>
