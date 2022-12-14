import React, { HTMLAttributes } from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { OverrideClassName } from "@kaizen/component-base"
import { SingleItemType } from "../../../types"
import { useSelectContext } from "../../Select"
import styles from "./ListBox.module.scss"

export interface SingleListBoxProps
  extends OverrideClassName<HTMLAttributes<HTMLUListElement>> {
  menuProps: AriaListBoxOptions<SingleItemType>
  children: React.ReactNode
}

export const ListBox: React.VFC<SingleListBoxProps> = ({
  menuProps,
  children,
  classNameOverride,
}) => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { state } = useSelectContext()
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true, autoFocus: "first" },
    state,
    ref
  )

  return (
    <ul
      {...listBoxProps}
      ref={ref}
      className={(styles.listBox, classNameOverride)}
    >
      {children}
    </ul>
  )
}

ListBox.displayName = "ListBox"
