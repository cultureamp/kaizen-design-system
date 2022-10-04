import React from "react"
import { Node } from "@react-types/shared"
import { ItemType } from "../../types"

export interface ListBoxSectionProps {
  items: Array<Node<ItemType>>
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBoxSection: React.VFC<ListBoxSectionProps> = ({
  items,
  sectionName,
  children,
}) => (
  <div aria-label={sectionName}>
    {Array.from(items).map(node => node != undefined && children(node))}
  </div>
)

ListBoxSection.displayName = "ListBoxSection"
