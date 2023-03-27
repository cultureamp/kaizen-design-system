import React from "react"
import { Item, Section } from "@react-stately/collections"
import { CollectionElement } from "@react-types/shared"
import { SelectItem, SelectOption, SelectOptionGroup } from "../types"

const isSelectOptionGroup = <Option extends SelectOption>(
  item: SelectItem
): item is SelectOptionGroup<Option> =>
  item.hasOwnProperty("options") && Array.isArray(item.options)

export const transformSelectItemToCollectionElement = <
  Option extends SelectOption
>(
  item: SelectItem<Option>
): CollectionElement<SelectItem<Option>> =>
  isSelectOptionGroup<Option>(item) ? (
    <Section<Option> key={item.label} title={item.label} items={item.options}>
      {(child): JSX.Element => <Item key={child.value}>{child.label}</Item>}
    </Section>
  ) : (
    <Item<Option> key={item.value}>{item.label}</Item>
  )
