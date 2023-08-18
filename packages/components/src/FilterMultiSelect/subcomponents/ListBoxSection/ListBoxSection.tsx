import React, { ReactNode, useState } from "react"
import { v4 } from "uuid"
import { VisuallyHidden } from "@kaizen/a11y"
import { MultiSelectItem } from "../../types"
import styles from "./ListBoxSection.module.scss"
export interface ListBoxSectionProps {
  items: MultiSelectItem[]
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
  /** If provided, will override the aria-label for this group */
  sectionHeader?: ReactNode
  children: (item: MultiSelectItem) => React.ReactNode
}

export const ListBoxSection = ({
  items,
  sectionName,
  children,
  sectionHeader,
}: ListBoxSectionProps): JSX.Element => {
  const [listSectionId] = useState<string>(v4())
  return (
    <li role="presentation">
      <ul
        className={styles.listBoxSection}
        aria-label={sectionName}
        aria-labelledby={sectionHeader ? listSectionId : undefined}
        role="group"
      >
        {sectionHeader && (
          <li
            className={styles.listBoxSectionHeader}
            id={listSectionId}
            role="presentation"
          >
            <VisuallyHidden>{sectionName}. </VisuallyHidden>
            {sectionHeader}
          </li>
        )}
        {/*
         * This seems semantically strange but most closely aligns to WCAGs suggested pattern:
         https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/
         * the role="presentation" will throw an error a11y warning "Element has children which are not allowed".
         This is expected and is an accepted issue / potential limitation with axe
         */}
        {Array.from(items).map(node => node != undefined && children(node))}
      </ul>
    </li>
  )
}
ListBoxSection.displayName = "ListBoxSection"
