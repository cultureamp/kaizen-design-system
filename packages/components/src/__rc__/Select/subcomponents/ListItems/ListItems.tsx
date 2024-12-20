import React from 'react'
import { type SelectOption } from '../../types'
import { ListItem, type ListItemProps } from '../ListItem'

export type ListItemsProps<Option extends SelectOption> = {
  items: ListItemProps<Option>['item'][]
}

/*
 * Default rendered list of select items
 */
export const ListItems = <Option extends SelectOption>({
  items,
}: ListItemsProps<Option>): JSX.Element => (
  <>
    {items.map((item) => (
      <ListItem<Option> key={item.key} item={item} />
    ))}
  </>
)

ListItems.displayName = 'ListItems'
