import React from "react"
import { Node } from "@react-types/shared"
import { ItemType } from "../../types"

export interface ListBoxSectionProps {
  section: Array<Node<ItemType>>
  sectionName: string
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBoxSection: React.VFC<ListBoxSectionProps> = ({
  section,
  sectionName,
  children,
}) => (
  <div aria-label={sectionName}>
    {Array.from(section).map(node => node != undefined && children(node))}
  </div>
)

ListBoxSection.displayName = "ListBoxSection"
