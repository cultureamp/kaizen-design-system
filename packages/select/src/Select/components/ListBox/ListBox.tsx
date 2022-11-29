import React from "react"
import { useListBox } from "@react-aria/listbox"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useSelectContext } from "../../provider/SelectProvider"
import { ItemType } from "../../types"
import styles from "./ListBox.module.scss"

export interface ListBoxProps {
  children: (items: Array<Node<ItemType>>) => React.ReactNode
}

export const ListBox: React.VFC<ListBoxProps> = (props: ListBoxProps) => {
  const { children } = props
  const { state } = useSelectContext()
  const ref = React.useRef<HTMLUListElement>(null)

  const { listBoxProps } = useListBox(
    {
      ...props,
      disallowEmptySelection: true,
    },
    state,
    ref
  )

  const items = Array.from(state.collection)

  return (
    <ul {...listBoxProps} ref={ref} className={classNames([styles.listBox])}>
      {children(items)}
    </ul>
  )
}

ListBox.displayName = "ListBox"
