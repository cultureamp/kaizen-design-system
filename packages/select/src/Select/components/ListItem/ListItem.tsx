import React from "react"
import { Node } from "@react-types/shared"
import { SingleItemType } from "../../../types"
import { ListBoxSection } from "../ListBoxSection"
import { Option } from "../Option"

export type ListItemProps = {
  item: Node<SingleItemType>
}

export const ListItem = ({ item }: ListItemProps): JSX.Element =>
  item.type === "section" ? (
    <ListBoxSection key={item.key} section={item} />
  ) : (
    <Option key={item.key} item={item} />
  )

ListItem.displayName = "ListItem"
