import React from 'react'
import { type AriaListBoxOptions } from '@react-aria/listbox'
import { useSelectContext } from '../../context'
import {
  type SingleSelectItem,
  type SingleSelectItemNode,
  type SingleSelectOption,
} from '../../types'
import { ListBox } from '../ListBox'
import { ListItems } from '../ListItems'
import { Overlay } from '../Overlay'
import styles from './SelectPopoverContents.module.scss'

export type SelectPopoverContentsProps<Option extends SingleSelectOption> = {
  children?: (args: { items: SingleSelectItemNode<Option>[] }) => React.ReactNode
  menuProps: AriaListBoxOptions<SingleSelectItem<Option>>
  popoverRef?: React.RefObject<Element | null>
}

export const SelectPopoverContents = <Option extends SingleSelectOption>({
  children,
  menuProps,
  popoverRef,
}: SelectPopoverContentsProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()

  // The collection structure is set by useSelectState's `children`
  // which we have used a util to ensure the following structure
  // - SingleSelectOptionGroup => Section
  // - Option => Item
  const itemNodes = Array.from(state.collection) as SingleSelectItemNode<Option>[]

  return (
    <div className={styles.selectPopoverContents}>
      <Overlay<Option> popoverRef={popoverRef}>
        <ListBox<Option> menuProps={menuProps}>
          {children ? children({ items: itemNodes }) : <ListItems<Option> items={itemNodes} />}
        </ListBox>
      </Overlay>
    </div>
  )
}

SelectPopoverContents.displayName = 'Select.PopoverContents'
