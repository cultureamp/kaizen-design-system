import React from "react"
import { SelectOption } from "../../types"
import { ListItem, ListItemProps } from "../ListItem"

export type ListItemsProps<Option extends SelectOption> = {
  items: Array<ListItemProps<Option>["item"]>
}

/*
 * Default rendered list of select items
 */
export const ListItems = <Option extends SelectOption>({
  items,
}: ListItemsProps<Option>): JSX.Element => (
  <>
    {items.map(item => (
      <ListItem<Option> key={item.key} item={item} />
    ))}
  </>
)

ListItems.displayName = "ListItems"
