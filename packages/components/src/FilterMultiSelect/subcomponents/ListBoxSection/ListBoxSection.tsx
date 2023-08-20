import React, { ReactNode, useState } from "react"
import { v4 } from "uuid"
import { VisuallyHidden } from "@kaizen/a11y"
import { MultiSelectItem } from "../../types"
import styles from "./ListBoxSection.module.scss"

type SectionNameProps = {
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
}

type SectionHeaderProps = {
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName?: string
  /**
   * Can be used for a visual title of the ListBoxSection or to provide addition information in a React node.
   * If this is the same title as sectionName, you should only pass in a sectionHeader to avoid duplicate descriptions.
   */
  sectionHeader: ReactNode
}

export type ListBoxSectionProps = {
  items: MultiSelectItem[]
  children: (item: MultiSelectItem) => React.ReactNode
} & (SectionHeaderProps | SectionNameProps)

export const ListBoxSection = ({
  items,
  children,
  sectionName,
  ...restProps
}: ListBoxSectionProps): JSX.Element => {
  const [listSectionId] = useState<string>(v4())
  const hasSectionHeader = "sectionHeader" in restProps
  return (
    <li role="presentation">
      <ul
        className={styles.listBoxSection}
        aria-label={!hasSectionHeader ? sectionName : undefined}
        aria-labelledby={hasSectionHeader ? listSectionId : undefined}
        role="group"
      >
        {hasSectionHeader && (
          <li
            className={styles.listBoxSectionHeader}
            id={listSectionId}
            role="presentation"
          >
            {sectionName && <VisuallyHidden>{sectionName}. </VisuallyHidden>}
            {restProps.sectionHeader}
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
