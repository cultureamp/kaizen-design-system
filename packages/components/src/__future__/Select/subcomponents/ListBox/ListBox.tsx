import React, { HTMLAttributes, useEffect } from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import classnames from "classnames"
import { OverrideClassName } from "~components/types/OverrideClassName"
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
  const [isDocumentReady, setIsDocumentReady] = React.useState(false)
  const { listBoxProps } = useListBox(
    {
      ...menuProps,
      disallowEmptySelection: true,
      autoFocus: false,
    },
    state,
    ref
  )

  useEffect(() => {
    if (isDocumentReady) {
      if (state.selectedItem) {
        const elKey = state.selectedItem.key
        const selectedOpt = document.querySelector(
          `[data-key="${elKey}"]`
        ) as HTMLElement

        selectedOpt.focus()
      } else {
        const elKey = state.collection.getFirstKey()
        const selectedOpt = document.querySelector(
          `[data-key="${elKey}"]`
        ) as HTMLElement

        selectedOpt.focus()
      }
    }
    /* This will check that the document exists and also give enough to for the listbox to be aware of its position in the DOM.
    If this is remove we will have an issue with the focus jumping up to the top of the page */
    if (document !== undefined) {
      setIsDocumentReady(true)
    }
  }, [isDocumentReady])

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
