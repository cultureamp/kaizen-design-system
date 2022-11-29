import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SelectState } from "@react-stately/select"
import classNames from "classnames"
import { ItemType } from "../../types"
import { Option } from "../Option/Option"
import styles from "./ListBox.module.scss"

export interface ListBoxProps {
  state: SelectState<ItemType>
  menuProps: AriaListBoxOptions<ItemType>
}

export const ListBox: React.VFC<ListBoxProps> = ({ state, menuProps }) => {
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true },
    state,
    ref
  )

  return (
    <ul {...listBoxProps} ref={ref} className={classNames([styles.listBox])}>
      {Array.from(state.collection).map(item => (
        <Option key={item.key} state={state} item={item} />
      ))}
    </ul>
  )
}

ListBox.displayName = "ListBox"
