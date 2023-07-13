import React, { ReactNode } from "react"
import { v4 } from "uuid"
import { MultiSelectItem } from "../../../types"
import styles from "./ListBoxSection.module.scss"
export interface ListBoxSectionProps {
  items: MultiSelectItem[]
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
  /** @default undefined */
  sectionHeader?: ReactNode
  children: (item: MultiSelectItem) => React.ReactNode
}

export const ListBoxSection = ({
  items,
  sectionName,
  children,
  sectionHeader,
}: ListBoxSectionProps): JSX.Element => {
  const listSectionId = sectionHeader ? v4() : undefined
  return (
    // This seems semantically strange but is value in elements with role="listbox"
    <div
      className={styles.listBoxSection}
      aria-label={!sectionHeader ? sectionName : undefined}
      aria-labelledby={listSectionId}
      role="group"
    >
      {sectionHeader && (
        <li role="presentation" id={listSectionId}>
          {sectionHeader}
        </li>
      )}
      {Array.from(items).map(node => node != undefined && children(node))}
    </div>
  )
}
ListBoxSection.displayName = "ListBoxSection"
