import { type Key, type Node, type Selection as ReactAriaSelection } from '@react-types/shared'

export type ItemType = {
  label: string
  value: Key
  count?: string
  isDisabled?: boolean
}

export type MultiSelectItem = Node<ItemType>

export type Selection = ReactAriaSelection
