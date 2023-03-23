import React from "react"
import { ListItem, ListItemProps } from "../ListItem"

export type ListItemsProps = {
  items: Array<ListItemProps["item"]>
}

/*
 * Default rendered list of select items
 */
export const ListItems = ({ items }: ListItemsProps): JSX.Element => (
  <>
    {items.map(item => (
      <ListItem key={item.key} item={item} />
    ))}
  </>
)

ListItems.displayName = "ListItems"
