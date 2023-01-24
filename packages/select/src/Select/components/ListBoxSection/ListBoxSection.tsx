import React from "react"
import { useListBoxSection } from "@react-aria/listbox"
import { Node } from "@react-types/shared"
import { Heading } from "@kaizen/typography"
import { SingleItemType } from "../../../types"
import { Option } from "../Option/Option"
import styles from "./ListBoxSection.module.scss"

export interface ListBoxSectionProps {
  section: Node<SingleItemType>
}

export const ListBoxSection = ({
  section,
}: ListBoxSectionProps): JSX.Element => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  })

  return (
    <>
      <li {...itemProps} className={styles.sectionWrapper}>
        {section.rendered && (
          <Heading
            variant="heading-6"
            {...headingProps}
            classNameOverride={styles.sectionHeading}
          >
            {section.rendered}
          </Heading>
        )}
        <ul {...groupProps} className={styles.sectionList}>
          {Array.from(section.childNodes).map(item => (
            <Option key={item.key} item={item} />
          ))}
        </ul>
      </li>
    </>
  )
}

ListBoxSection.displayName = "ListBoxSection"
