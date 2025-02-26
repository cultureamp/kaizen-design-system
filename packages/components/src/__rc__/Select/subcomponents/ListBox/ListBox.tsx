import React, { useEffect, useRef, type HTMLAttributes, type Key, type ReactNode } from 'react'
import { useListBox, type AriaListBoxOptions } from '@react-aria/listbox'
import { type SelectState } from '@react-stately/select'
import classnames from 'classnames'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useSelectContext } from '../../context'
import { useHasCalculatedListboxPosition } from '../../hooks/useHasCalculatedListboxPosition'
import { type SelectItem, type SelectItemNode, type SelectOption } from '../../types'
import styles from './ListBox.module.scss'

export type SingleListBoxProps<Option extends SelectOption> = OverrideClassName<
  HTMLAttributes<HTMLUListElement>
> & {
  children: ReactNode
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}

/** determines is the first or last key passed in is a section. If not it will return the key, otherwise will return the first option key of that section */
const getOptionOrSectionKey = (
  optionKey: SelectOption['value'] | null,
  state: SelectState<SelectItem<any>>,
): Key | null => {
  if (!optionKey) return null

  const option = state.collection.getItem(optionKey) as SelectItemNode | null
  const optionType = option?.type

  if (optionType === 'section') {
    const sectionOptions = option?.value?.options

    return sectionOptions ? Array.from(sectionOptions)[0]?.value : null
  }
  return optionKey
}

/** A util to retrieve the key of the correct focusable option based of the focus strategy
 * This is used to determine which element from the collection to focus to on open base on the keyboard event
 * ie: UpArrow will set the focusStrategy to "last"
 */
const getOptionKeyFromCollection = (state: SelectState<SelectItem<any>>): Key | null => {
  if (state.selectedItem) {
    return state.selectedItem.key
  }

  if (state.focusStrategy === 'last') {
    return getOptionOrSectionKey(state.collection.getLastKey(), state)
  }

  return getOptionOrSectionKey(state.collection.getFirstKey(), state)
}

/** This makes the use of query selector less brittle in instances where a failed selector is passed in
 */
const safeQuerySelector = (selector: string): HTMLElement | null => {
  try {
    return document.querySelector(selector)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Kaizen querySelector failed:', error)
    return null
  }
}

export const ListBox = <Option extends SelectOption>({
  children,
  menuProps,
  classNameOverride,
  ...restProps
}: SingleListBoxProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()
  const ref = useRef<HTMLUListElement>(null)
  const hasCalculatedListboxPosition = useHasCalculatedListboxPosition(ref)
  const { listBoxProps } = useListBox(
    {
      ...menuProps,
      disallowEmptySelection: true,
      // This is to ensure that the listbox doesn't use React Aria's auto focus feature for Listbox, which creates a visual bug
      autoFocus: false,
    },
    state,
    ref,
  )

  /**
   * When the Listbox is opened the initial position starts above the window, which can cause the out of the box behaviour in react-aria's listbox to jump a user to the top of the page.
   */
  useEffect(() => {
    if (hasCalculatedListboxPosition) {
      const optionKey = getOptionKeyFromCollection(state)
      const focusToElement = safeQuerySelector(`[data-key='${optionKey}']`)

      if (focusToElement) {
        focusToElement.focus()
      } else {
        ref.current?.focus()
      }
    }
    // Only run this effect for checking the first successful render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasCalculatedListboxPosition])

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

ListBox.displayName = 'ListBox'
