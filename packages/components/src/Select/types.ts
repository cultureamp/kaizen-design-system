import { Node } from "@react-types/shared"

export type SelectOption = {
  label: string
  value: React.Key
  disabled?: boolean
  options?: never
}

export type SelectOptionGroup<Option extends SelectOption> = {
  label: string
  options: Iterable<Option>
}

export type SelectItem<Option extends SelectOption = SelectOption> =
  | Option
  | SelectOptionGroup<Option>

export type SelectOptionNode<Option extends SelectOption = SelectOption> =
  Node<Option> & {
    type: "item"
    hasChildNodes: false
  }

export type SelectOptionGroupNode<Option extends SelectOption = SelectOption> =
  Omit<Node<SelectOptionGroup<Option>>, "childNodes"> & {
    type: "section"
    hasChildNodes: true
    childNodes: Array<SelectOptionNode<Option>>
  }

export type SelectItemNode<Option extends SelectOption = SelectOption> =
  | SelectOptionNode<Option>
  | SelectOptionGroupNode<Option>
