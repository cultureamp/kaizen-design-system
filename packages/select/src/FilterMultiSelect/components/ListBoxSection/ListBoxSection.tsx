import React from "react"
import { Node } from "@react-types/shared"
import { ItemType } from "../../types"

export interface ListBoxSectionProps {
  section: Array<Node<ItemType>>
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBoxSection: React.VFC<ListBoxSectionProps> = ({
  section,
  children,
}) => (
  <>{Array.from(section).map(node => node != undefined && children(node))}</>
)

ListBoxSection.displayName = "ListBoxSection"
