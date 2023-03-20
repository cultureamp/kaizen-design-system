import React from "react"
import { Node } from "@react-types/shared"
import { ItemType } from "../../../__future__/select/src/types"
import styles from "./ListBoxSection.module.scss"

export interface ListBoxSectionProps {
  items: Array<Node<ItemType>>
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBoxSection = ({
  items,
  sectionName,
  children,
}: ListBoxSectionProps): JSX.Element => (
  <div aria-label={sectionName} className={styles.listBoxSection}>
    {Array.from(items).map(node => node != undefined && children(node))}
  </div>
)

ListBoxSection.displayName = "ListBoxSection"
