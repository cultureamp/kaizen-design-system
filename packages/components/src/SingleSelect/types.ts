import { type Key, type Node } from '@react-types/shared'

export type SingleSelectOption = {
  label: string
  value: Key
  disabled?: boolean
  options?: never
}

export type SingleSelectOptionGroup<Option extends SingleSelectOption> = {
  label: string
  options: Iterable<Option>
}

export type SingleSelectItem<Option extends SingleSelectOption = SingleSelectOption> =
  | Option
  | SingleSelectOptionGroup<Option>

export type SingleSelectOptionNode<Option extends SingleSelectOption = SingleSelectOption> =
  Node<Option> & {
    type: 'item'
    hasChildNodes: false
  }

export type SingleSelectOptionGroupNode<Option extends SingleSelectOption = SingleSelectOption> =
  Omit<Node<SingleSelectOptionGroup<Option>>, 'childNodes'> & {
    type: 'section'
    hasChildNodes: true
    childNodes: SingleSelectOptionNode<Option>[]
  }

export type SingleSelectItemNode<Option extends SingleSelectOption = SingleSelectOption> =
  | SingleSelectOptionNode<Option>
  | SingleSelectOptionGroupNode<Option>
