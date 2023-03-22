import React from "react"
import { Node } from "@react-types/shared"
import { SingleItemType } from "../../../types"
import { ListBoxSection } from "../ListBoxSection"
import { Option } from "../Option"

export type ListItemsProps = {
  items: Array<Node<SingleItemType>>
}

/*
 * Default rendered list of select items
 */
export const ListItems = ({ items }: ListItemsProps): JSX.Element => (
  <>
    {items.map((item: Node<SingleItemType>) =>
      item.type === "section" ? (
        <ListBoxSection key={item.key} section={item} />
      ) : (
        <Option key={item.key} item={item} />
      )
    )}
  </>
)

ListItems.displayName = "ListItems"
