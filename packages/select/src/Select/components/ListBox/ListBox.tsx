import React, { HTMLAttributes } from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { SingleItemType } from "../../../types"
import { useSelectContext } from "../../context/SelectContext"
import styles from "./ListBox.module.scss"

export type SingleListBoxProps = OverrideClassName<
  HTMLAttributes<HTMLUListElement>
> & {
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SingleItemType>
  children: React.ReactNode
}

export const ListBox = ({
  menuProps,
  children,
  classNameOverride,
  ...restProps
}: SingleListBoxProps): JSX.Element => {
  const ref = React.useRef<HTMLUListElement>(null)
  const { state } = useSelectContext()
  const { listBoxProps } = useListBox(
    { ...menuProps, disallowEmptySelection: true, autoFocus: "first" },
    state,
    ref
  )
  return (
    <ul
      ref={ref}
      className={classnames(styles.listBox, classNameOverride)}
      {...listBoxProps}
      {...restProps}
    >
      {children}
    </ul>
  )
}

ListBox.displayName = "ListBox"
