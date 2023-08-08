import React, { ReactNode, useState } from "react"
import { v4 } from "uuid"
import { VisuallyHidden } from "@kaizen/a11y"
import { MultiSelectItem } from "../../../types"
import styles from "./ListBoxSection.module.scss"

export interface ListBoxSectionBaseProps {
  items: MultiSelectItem[]
  /**
   * Becomes an aria-label on the section, informing
   * unsighted users
   */
  sectionName: string
  /**
   * Can be used for a visual title of the ListBoxSection or to provide addition information in a React node.
   * If this is the same title as sectionName, you should only pass in a sectionHeader to avoid duplicate descriptions.
   */
  sectionHeader?: ReactNode
  children: (item: MultiSelectItem) => React.ReactNode
}
export interface ListBoxSectionWithHeaderProps
  extends Omit<ListBoxSectionBaseProps, "sectionName" | "sectionHeader"> {
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

export type ListBoxSectionProps =
  | ListBoxSectionWithHeaderProps
  | ListBoxSectionBaseProps

// const doesNeedSectionName = ()

export const ListBoxSection = ({
  items,
  children,
  ...otherProps
}: ListBoxSectionProps): JSX.Element => {
  const [listSectionId] = useState<string>(v4())
  const hasSectionHeader = otherProps?.sectionHeader
  const ariaLabel = otherProps.sectionName || ""
  return (
    <li role="presentation">
      <ul
        className={styles.listBoxSection}
        aria-label={ariaLabel || ""}
        aria-labelledby={hasSectionHeader ? listSectionId : undefined}
        role="group"
      >
        {otherProps?.sectionHeader && (
          <li
            className={styles.listBoxSectionHeader}
            id={listSectionId}
            role="presentation"
          >
            {otherProps.sectionName && (
              <VisuallyHidden>{otherProps.sectionName}. </VisuallyHidden>
            )}
            {otherProps.sectionHeader}
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
