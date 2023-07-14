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
  /** * If provided, will override the aria-label for this group */
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
    <li role="presentation">
      <ul
        className={styles.listBoxSection}
        aria-label={sectionHeader ? undefined : sectionName}
        aria-labelledby={sectionHeader ? listSectionId : undefined}
        role="group"
      >
        {/*
         * This seems semantically strange but most closely aligns to WCAGs suggested pattern:
         https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/
         * the role="presentation" will throw an error a11y warning "Element has children which are not allowed".
         This is expected and is an accepted issue / potential limitation with axe
         */}
        {sectionHeader && (
          <li
            className={styles.listBoxSectionHeader}
            role="presentation"
            id={listSectionId}
          >
            {sectionHeader}
          </li>
        )}
        {Array.from(items).map(node => node != undefined && children(node))}
      </ul>
    </li>
  )
}
ListBoxSection.displayName = "ListBoxSection"
