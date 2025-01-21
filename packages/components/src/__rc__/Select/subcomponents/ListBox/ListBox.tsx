import React, { useEffect, useRef, type HTMLAttributes, type Key, type ReactNode } from 'react'
import { useListBox, type AriaListBoxOptions } from '@react-aria/listbox'
import { type SelectState } from '@react-stately/select'
import classnames from 'classnames'
import { useIsClientReady } from '~components/__utilities__/useIsClientReady'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useSelectContext } from '../../context'
import { useHasStableYPosition } from '../../hooks/useHasStableYPosition'
import { type SelectItem, type SelectOption } from '../../types'
import styles from './ListBox.module.scss'

export type SingleListBoxProps<Option extends SelectOption> = OverrideClassName<
  HTMLAttributes<HTMLUListElement>
> & {
  children: ReactNode
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}

// TODO: This accounts for the grouping of elements in a listbox - there's still a cleaner way to do this I'm sure but this is something that can be finessed
const getOptionKey = (
  optionKey: SelectOption['value'] | null,
  state: SelectState<SelectItem<any>>,
): Key | null => {
  if (!optionKey) {
    return null
  }
  const option = state.collection.getItem(optionKey)
  const optionType = option?.type
  // const optionChildren = option

  console.log('optionType', option)
  console.log('optionType', optionType)

  if (optionType === 'section') {
    const firstChildOption = option?.value.options[0]
    console.log(firstChildOption)
    // return the first key of the section options
    return firstChildOption.value
  }
  return optionKey
}

/** A util to retrieve the key of the correct focusable items based of the focus strategy
 * This is used to determine which element from the collection to focus to on open base on the keyboard event
 * ie: UpArrow will set the focusStrategy to "last"
 */
const getOptionKeyFromCollection = (state: SelectState<SelectItem<any>>): Key | null => {
  if (state.selectedItem) {
    return state.selectedItem.key
  } else if (state.focusStrategy === 'last') {
    // return state.collection.getLastKey()
    return getOptionKey(state.collection.getLastKey(), state)
  }
  return getOptionKey(state.collection.getFirstKey(), state)
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
  const isClientReady = useIsClientReady()
  const { state, section } = useSelectContext<Option>()
  const ref = useRef<HTMLUListElement>(null)
  const hasStableYPosition = useHasStableYPosition(ref)
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
   * This uses the hasStableYPosition to determine if the position is stable within the window
   */
  useEffect(() => {
    if (isClientReady && hasStableYPosition) {
      const optionKey = getOptionKeyFromCollection(state)
      const focusToElement = safeQuerySelector(`[data-key='${optionKey}']`)
      // console.log(
      //   'state.collection',
      //   state.collection.getItem(state.collection.getFirstKey())?.type === 'section',
      // )
      // console.log(optionKey)
      // console.log(focusToElement)

      if (focusToElement) {
        console.log('focusToElement', focusToElement)
        focusToElement.focus()
      } else {
        ref.current?.focus()
      }
    }
    // Only run this effect for checking the first successful render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClientReady, hasStableYPosition])

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
