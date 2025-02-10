import React, { useEffect, useRef } from 'react'
import { type AriaListBoxOptions } from '@react-aria/listbox'
import { useSelectContext } from '../../context'
import { type SelectItem, type SelectItemNode, type SelectOption } from '../../types'
import { ListBox } from '../ListBox'
import { ListItems } from '../ListItems'
import styles from './SelectPopoverContents.module.scss'

export type SelectPopoverContentsProps<Option extends SelectOption> = {
  children?: (args: { items: SelectItemNode<Option>[] }) => React.ReactNode
  menuProps: AriaListBoxOptions<SelectItem<Option>>
  /* A callback that is triggered when opened. Used to handle focus management of popover contents */
  onActivation?: (container: HTMLDivElement) => void
}

export const SelectPopoverContents = <Option extends SelectOption>({
  children,
  menuProps,
  onActivation,
}: SelectPopoverContentsProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onActivation && containerRef.current) {
      onActivation(containerRef.current)
    }
  }, [onActivation])

  // The collection structure is set by useSelectState's `children`
  // which we have used a util to ensure the following structure
  // - SelectOptionGroup => Section
  // - Option => Item
  const itemNodes = Array.from(state.collection) as SelectItemNode<Option>[]

  return (
    <div ref={containerRef} className={styles.selectPopoverContents}>
      <ListBox<Option> menuProps={menuProps}>
        {children ? children({ items: itemNodes }) : <ListItems<Option> items={itemNodes} />}
      </ListBox>
    </div>
  )
}

SelectPopoverContents.displayName = 'Select.PopoverContents'
