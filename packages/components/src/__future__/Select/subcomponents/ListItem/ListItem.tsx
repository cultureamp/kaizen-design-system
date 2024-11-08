import React from "react"
import { SelectItemNode, SelectOption } from "../../types"
import { ListBoxSection } from "../ListBoxSection"
import { Option } from "../Option"

export type ListItemProps<Option extends SelectOption = SelectOption> = {
  item: SelectItemNode<Option>
}

export const ListItem = <Option extends SelectOption = SelectOption>({
  item,
}: ListItemProps<Option>): JSX.Element =>
  item.type === "section" ? (
    <ListBoxSection<Option> key={item.key} section={item} />
  ) : (
    <Option<Option> key={item.key} item={item} />
  )

ListItem.displayName = "ListItem"
