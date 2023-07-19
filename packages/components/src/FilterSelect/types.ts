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

export interface SelectOptionNode<Option extends SelectOption = SelectOption>
  extends Node<Option> {
  type: "item"
  hasChildNodes: false
}

export interface SelectOptionGroupNode<
  Option extends SelectOption = SelectOption,
> extends Omit<Node<SelectOptionGroup<Option>>, "childNodes"> {
  type: "section"
  hasChildNodes: true
  childNodes: Array<SelectOptionNode<Option>>
}

export type SelectItemNode<Option extends SelectOption = SelectOption> =
  | SelectOptionNode<Option>
  | SelectOptionGroupNode<Option>
