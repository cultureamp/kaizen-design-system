import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SingleItemType } from "../../../types"
import { useSelectContext } from "../../context/SelectContext"
import styles from "./ListBox.module.scss"

export type SingleListBoxProps = {
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SingleItemType>
  children: React.ReactNode
  id: string
}

export const ListBox = ({
  menuProps,
  children,
  id,
}: SingleListBoxProps): JSX.Element => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { state } = useSelectContext()
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true, autoFocus: "first" },
    state,
    ref
  )
  return (
    <ul {...listBoxProps} ref={ref} className={styles.listBox} id={id}>
      {children}
    </ul>
  )
}

ListBox.displayName = "ListBox"
