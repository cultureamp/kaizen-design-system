import React, { HTMLAttributes, Key, useEffect } from "react"
import { AriaListBoxOptions, useListBox } from "@react-aria/listbox"
import { SelectState } from "@react-stately/select"
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

/** A util to retrieve the key of the correct focusable items based of the focus strategy
 * This is used to determine which element from the collection to focus to on open base on the keyboard event
 * ie: UpArrow will set the focusStrategy to "last"
 */
const getOptionKeyFromCollection = (
  state: SelectState<SelectItem<any>>
): Key | null => {
  if (state.selectedItem) {
    return state.selectedItem.key
  } else if (state.focusStrategy === "last") {
    return state.collection.getLastKey()
  }
  return state.collection.getFirstKey()
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
      const optionKey = getOptionKeyFromCollection(state)
      const focusToElement = document.querySelector(
        `[data-key="${optionKey}"]`
      ) as HTMLElement
      if (focusToElement) {
        focusToElement.focus()
      }
    }
    /* This will check that the document exists and also give enough to for the listbox to be aware of its position in the DOM.
    If this is remove we will have an issue with the focus jumping up to the top of the page */
    if (document !== undefined) {
      setIsDocumentReady(true)
    }
  }, [isDocumentReady])

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
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
