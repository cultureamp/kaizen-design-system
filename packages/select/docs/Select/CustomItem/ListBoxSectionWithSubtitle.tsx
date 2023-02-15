import React from "react"
import { useListBoxSection } from "@react-aria/listbox"
import { Node } from "@react-types/shared"
import { Heading, Paragraph } from "@kaizen/typography"
import {
  CustomOptionWithSubtitle,
  WithSubtitleType,
} from "./OptionWithSubtitle"
import styles from "./ListBoxSectionWithSubtitle.module.scss"

export interface ListBoxSectionWithSubtitleProps {
  section: Node<WithSubtitleType>
}

export const ListBoxSectionWithSubtitle = ({
  section,
}: ListBoxSectionWithSubtitleProps): JSX.Element => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  })

  return (
    <>
      <li {...itemProps} className={styles.sectionWrapper}>
        {section.rendered && (
          <>
            <Heading
              variant="heading-6"
              {...headingProps}
              classNameOverride={styles.sectionHeading}
            >
              {section.rendered}
            </Heading>
            <Paragraph
              variant="small"
              classNameOverride={styles.sectionHeading}
            >
              {section.value.subtitle}
            </Paragraph>
          </>
        )}
        <ul {...groupProps} className={styles.sectionList}>
          {Array.from(section.childNodes).map(item => (
            <CustomOptionWithSubtitle key={item.key} item={item} />
          ))}
        </ul>
      </li>
    </>
  )
}

ListBoxSectionWithSubtitle.displayName = "ListBoxSectionWithSubtitle"
