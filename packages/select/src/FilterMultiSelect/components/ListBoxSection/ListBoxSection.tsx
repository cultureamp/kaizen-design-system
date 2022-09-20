import React from "react"
import classNames from "classnames"
import { useListBoxSection } from "@react-aria/listbox"
import { useSeparator } from "@react-aria/separator"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemGroupType, ItemType } from "../../types"
import styles from "./ListBoxSection.scss"

export interface ListBoxSectionProps {
  section: ItemGroupType
  children: (item: ItemType) => React.ReactNode
}

export const ListBoxSection: React.VFC<ListBoxSectionProps> = ({
  section,
  children,
}) => {
  const { selectionState: state, listBoxProps } = useSelectionContext()

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.label,
    "aria-label": section["aria-label"],
  })

  const { separatorProps } = useSeparator({
    elementType: "li",
  })

  return (
    <>
      {section.value !== state.collection.getFirstKey() && (
        <li {...separatorProps} />
      )}
      <li {...itemProps}>
        {section.label && (
          <span {...headingProps} className={classNames(styles.sectionLabel)}>
            {section.label}
          </span>
        )}

        <ul
          {...listBoxProps}
          {...groupProps}
          className={classNames(styles.section)}
        >
          {section.children &&
            Array.from(section.children).map(node => children(node))}
        </ul>
      </li>
    </>
  )
}

ListBoxSection.displayName = "ListBoxSection"
