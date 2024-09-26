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
  const [isListboxReady, setListboxReady] = React.useState(false)
  const { listBoxProps } = useListBox(
    {
      ...menuProps,
      disallowEmptySelection: true,
      // This is to ensure that the listbox use React Aria's auto focus feature for Listbox, which creates a visual bug
      autoFocus: false,
    },
    state,
    ref
  )

  /**
   * This is a slightly hacky way to ensure the Listbox is aware of its position without using timeout.
   * This solves the page from refocusing to the top of the DOM when it is opened for the first time with keyboard.
   */
  useEffect(() => {
    setListboxReady(true)
  }, [])

  useEffect(() => {
    if (isListboxReady) {
      const optionKey = getOptionKeyFromCollection(state)
      const focusToElement = document.querySelector(
        `[data-key="${optionKey}"]`
      ) as HTMLElement
      if (focusToElement) {
        focusToElement.focus()
      }
    }
  }, [isListboxReady])

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
