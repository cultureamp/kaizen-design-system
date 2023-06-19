import React from "react"
import { MultiSelectItem } from "../../types"
import styles from "./ListBoxSection.module.scss"

export interface ListBoxSectionProps {
  items: MultiSelectItem[]
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
  children: (item: MultiSelectItem) => React.ReactNode
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

ListBoxSection.displayName = "FilterMultiSelect.ListBoxSection"
