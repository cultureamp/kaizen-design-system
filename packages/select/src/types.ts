import React from "react"
import { SelectState } from "@react-stately/select"
import { Node } from "@react-types/shared"

export type ValueType = React.Key

export interface ItemType {
  label: React.ReactNode
  value: ValueType
  count?: string
  isDisabled?: boolean
}

export interface SingleItemType {
  label: React.ReactNode
  value: ValueType | SectionChildType[]
}

export type SectionChildType = {
  label: React.ReactNode
  value: ValueType
}

export type SingleState = {
  state: SelectState<SingleItemType>
}

// types from @react-aria/@react-stately/@react-types that consumer might use goes here
export type { Selection } from "@react-types/shared"

export type MultiSelectItem = Node<ItemType>
