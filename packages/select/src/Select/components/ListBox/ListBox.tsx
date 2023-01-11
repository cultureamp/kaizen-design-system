import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SingleItemType } from "../../../types"
import { useSelectContext } from "../../context/SelectContext"
import styles from "./ListBox.module.scss"

export type SingleListBoxProps = {
  menuProps: AriaListBoxOptions<SingleItemType>
  children: React.ReactNode
}

export const ListBox = ({
  menuProps,
  children,
}: SingleListBoxProps): JSX.Element => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { state } = useSelectContext()
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
