import React, { useEffect, useRef, type HTMLAttributes, type Key, type ReactNode } from 'react'
import { useListBox, type AriaListBoxOptions } from '@react-aria/listbox'
// import { type SelectState } from '@react-stately/select'
import classnames from 'classnames'
import { useIsClientReady } from '~components/__utilities__/useIsClientReady'
// import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useSelectContext } from '../../context'
import { type SelectItem, type SelectOption } from '../../types'
import styles from './ListBox.module.scss'

export type SingleListBoxProps<Option extends SelectOption> = OverrideClassName<
  HTMLAttributes<HTMLUListElement>
> & {
  children: ReactNode
  /** Props for the popup. */
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}

const focusItem = (items: HTMLElement[], strategy: 'first' | 'last' | null): void => {
  const focusableItems = items.filter((item) => !item.hasAttribute('aria-disabled'))
  if (focusableItems.length === 0) return
  const itemToFocus =
    strategy === 'last' ? focusableItems[focusableItems.length - 1] : focusableItems[0]
  itemToFocus.focus()
}

export const ListBox = <Option extends SelectOption>({
  children,
  menuProps,
  classNameOverride,
  ...restProps
}: SingleListBoxProps<Option>): JSX.Element => {
  // const isClientReady = useIsClientReady()
  const { state } = useSelectContext<Option>()
  const ref = useRef<HTMLUListElement>(null)
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
