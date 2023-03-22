import React from "react"
import { Item, Section } from "@react-stately/collections"
import { CollectionChildren } from "@react-types/shared"
import { SingleItemType } from "../../types"

export const transformSelectChildren: CollectionChildren<
  SingleItemType
> = item =>
  Array.isArray(item.value) ? (
    <Section key={item.label} title={item.label} items={item.value}>
      {(child): JSX.Element => <Item key={child.value}>{child.label}</Item>}
    </Section>
  ) : (
    <Item key={item.value}>{item.label}</Item>
  )
