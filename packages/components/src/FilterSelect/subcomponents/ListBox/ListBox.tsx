import React, { HTMLAttributes } from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { useSelectContext } from "../../context"
import { SelectOption, SelectItem } from "../../types"
import styles from "./ListBox.module.scss"

export type SingleListBoxProps<Option extends SelectOption> = OverrideClassName<
  HTMLAttributes<HTMLUListElement>
> & {
  children: React.ReactNode
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}

export const ListBox = <Option extends SelectOption>({
  children,
  menuProps,
  classNameOverride,
  ...restProps
}: SingleListBoxProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()
  const ref = React.useRef<HTMLUListElement>(null)
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
