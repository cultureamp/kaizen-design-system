import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { Node } from "@react-types/shared"
import { ItemType, State } from "../../types"
import { Option } from "../Option/Option"
import styles from "./ListBox.module.scss"

type OptionsProps = State & {
  items: Array<Node<ItemType>>
}

export type ListBoxProps = State & {
  menuProps: AriaListBoxOptions<ItemType>
  children?: (optionsProps: OptionsProps) => React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = ({
  state,
  menuProps,
  children = ({ items }) =>
    items.map(item => <Option key={item.key} item={item} state={state} />),
}) => {
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true },
    state,
    ref
  )

  const items = Array.from(state.collection)

  return (
    <ul {...listBoxProps} ref={ref} className={styles.listBox}>
      {children({ items, state })}
    </ul>
  )
}

ListBox.displayName = "ListBox"
