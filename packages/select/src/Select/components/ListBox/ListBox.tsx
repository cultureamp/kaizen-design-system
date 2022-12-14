import React from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SelectState } from "@react-stately/select"
import { SingleItemType } from "../../../types"
import { useSelectContext } from "../../Select"
import styles from "./ListBox.module.scss"

export type SingleListBoxProps = {
  menuProps: AriaListBoxOptions<SingleItemType>
  children: React.ReactNode
  state?: SelectState<SingleItemType>
}

export const ListBox: React.VFC<SingleListBoxProps> = ({
  menuProps,
  children,
  state,
}) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { state: stateContext } = useSelectContext()
  const selectState = state ? state : stateContext
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true, autoFocus: "first" },
    selectState,
    ref
  )

  return (
    <ul {...listBoxProps} ref={ref} className={styles.listBox}>
      {children}
    </ul>
  )
}

ListBox.displayName = "ListBox"
