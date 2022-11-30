import React, { Children } from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SelectState } from "@react-stately/select"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { ItemType } from "../../types"
import { Option } from "../Option/Option"
import styles from "./ListBox.module.scss"

type OptionsProps = {
  items: Array<Node<ItemType>>
  state: SelectState<ItemType>
}

export interface ListBoxProps {
  children?: (optionsProps: OptionsProps) => React.ReactNode
  state: SelectState<ItemType>
  menuProps: AriaListBoxOptions<ItemType>
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
    <ul {...listBoxProps} ref={ref} className={classNames([styles.listBox])}>
      {/* {Array.from(state.collection).map(item => (
        <Option key={item.key} state={state} item={item} />
      ))} */}
      {children({ items, state })}
    </ul>
  )
}

ListBox.displayName = "ListBox"
