import React from 'react'

import { ComboMultiSelect } from './subcomponents/ComboMultiSelect'
import { ComboSingleSelect } from './subcomponents/ComboSingleSelect'
import { ListBoxItem } from './subcomponents/ListBoxItem'
import { MultiSelect } from './subcomponents/MultiSelect'
import { SingleSelect } from './subcomponents/SingleSelect'
import { TreeItem } from './subcomponents/TreeItem'

type ItemType = {
  id: string
  name: string
}

export const Picker = ({
  multi,
  items,
  search,
  nested,
  children,
}: {
  items: ItemType[]
  multi?: boolean
  search?: boolean
  nested?: boolean
  children?: React.ReactNode
}): JSX.Element => {
  return multi ? (
    search ? (
      <ComboMultiSelect items={items}>{children && children}</ComboMultiSelect>
    ) : (
      <MultiSelect items={items}>{children && children}</MultiSelect>
    )
  ) : search ? (
    <ComboSingleSelect>{children && children}</ComboSingleSelect>
  ) : (
    <SingleSelect nested={nested}>{children && children}</SingleSelect>
  )
}

Picker.ListBoxItem = ListBoxItem
Picker.TreeItem = TreeItem
