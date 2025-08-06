import React from 'react'
import { Item, Section } from '@react-stately/collections'
import { type CollectionElement } from '@react-types/shared'
import { type SingleSelectItem, type SingleSelectOption } from '../types'
import { isSelectOptionGroup } from './isSelectOptionGroup'

export const transformSelectItemToCollectionElement = <Option extends SingleSelectOption>(
  item: SingleSelectItem<Option>,
): CollectionElement<SingleSelectItem<Option>> =>
  isSelectOptionGroup<Option>(item) ? (
    <Section<Option> key={item.label} title={item.label} items={item.options}>
      {(child): JSX.Element => <Item key={child.value}>{child.label}</Item>}
    </Section>
  ) : (
    <Item<Option> key={item.value}>{item.label}</Item>
  )
