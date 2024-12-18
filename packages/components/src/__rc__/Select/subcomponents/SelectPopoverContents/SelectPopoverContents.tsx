import React from 'react'
import { type AriaListBoxOptions } from '@react-aria/listbox'
import { useSelectContext } from '../../context'
import { type SelectItem, type SelectItemNode, type SelectOption } from '../../types'
import { ListBox } from '../ListBox'
import { ListItems } from '../ListItems'
import { Overlay } from '../Overlay'
import styles from './SelectPopoverContents.module.scss'

export type SelectPopoverContentsProps<Option extends SelectOption> = {
  children?: (args: { items: SelectItemNode<Option>[] }) => React.ReactNode
  menuProps: AriaListBoxOptions<SelectItem<Option>>
}

export const SelectPopoverContents = <Option extends SelectOption>({
  children,
  menuProps,
}: SelectPopoverContentsProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()

  // The collection structure is set by useSelectState's `children`
  // which we have used a util to ensure the following structure
  // - SelectOptionGroup => Section
  // - Option => Item
  const itemNodes = Array.from(state.collection) as SelectItemNode<Option>[]

  return (
    <div className={styles.selectPopoverContents}>
      <Overlay<Option>>
        <ListBox<Option> menuProps={menuProps}>
          {children ? children({ items: itemNodes }) : <ListItems<Option> items={itemNodes} />}
        </ListBox>
      </Overlay>
    </div>
  )
}

SelectPopoverContents.displayName = 'Select.PopoverContents'
