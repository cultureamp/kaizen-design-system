import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SingleItemType, SingleState } from "../../../types"
import styles from "./ListBox.module.scss"

export type SingleListBoxProps = SingleState & {
  menuProps: AriaListBoxOptions<SingleItemType>
  children: React.ReactNode
}

export const ListBox: React.VFC<SingleListBoxProps> = ({
  state,
  menuProps,
  children,
}) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true, autoFocus: "first" },
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
