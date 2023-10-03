import React from "react"
import { useListBoxSection } from "@react-aria/listbox"
import { Heading } from "@kaizen/typography"
import { SelectOption, SelectOptionGroupNode } from "../../types"
import { Option } from "../Option/Option"
import styles from "./ListBoxSection.module.scss"

export type ListBoxSectionProps<Option extends SelectOption> = {
  section: SelectOptionGroupNode<Option>
}

export const ListBoxSection = <Option extends SelectOption = SelectOption>({
  section,
}: ListBoxSectionProps<Option>): JSX.Element => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  })

  return (
    <>
      <li {...itemProps} className={styles.sectionWrapper}>
        {section.rendered && (
          <Heading
            tag="span"
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
