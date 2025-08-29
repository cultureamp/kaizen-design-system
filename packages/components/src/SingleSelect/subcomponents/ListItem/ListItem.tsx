import React from 'react'
import { type SingleSelectItemNode, type SingleSelectOption } from '../../types'
import { ListBoxSection } from '../ListBoxSection'
import { Option } from '../Option'

export type ListItemProps<Option extends SingleSelectOption = SingleSelectOption> = {
  item: SingleSelectItemNode<Option>
}

export const ListItem = <Option extends SingleSelectOption = SingleSelectOption>({
  item,
}: ListItemProps<Option>): JSX.Element =>
  item.type === 'section' ? (
    <ListBoxSection<Option> key={item.key} section={item} />
  ) : (
    <Option<Option> key={item.key} item={item} />
  )

ListItem.displayName = 'ListItem'
