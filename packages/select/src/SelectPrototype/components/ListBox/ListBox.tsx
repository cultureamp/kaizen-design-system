import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { Node } from "@react-types/shared"
import { ItemType, State } from "../../types"
import { Option } from "../Option/Option"
import styles from "./ListBox.module.scss"

export type ListBoxProps = State & {
  menuProps: AriaListBoxOptions<ItemType>
  children: React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = ({
  state,
  menuProps,
  children,
}) => {
  const ref = React.createRef<HTMLUListElement>()
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true },
    state,
    ref
  )

  return (
    <ul {...listBoxProps} ref={ref} className={styles.listBox}>
      {children}
    </ul>
  )
}

ListBox.displayName = "ListBox"
