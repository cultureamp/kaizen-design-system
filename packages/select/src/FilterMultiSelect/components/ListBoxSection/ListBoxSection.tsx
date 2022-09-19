import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useListBoxSection } from "@react-aria/listbox"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import { FilterMultiSelect } from "../../FilterMultiSelect"
import styles from "./ListBox.scss"

export interface ListBoxSectionProps {
  section: ItemType
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

  // const { separatorProps } = useSeparator({
  //   elementType: "li",
  // })

  return (
    <>
      {section.value !== state.collection.getFirstKey() && (
        <li
          // {...separatorProps}
          style={{
            borderTop: "1px solid gray",
            margin: "2px 5px",
          }}
        />
      )}
      <li {...itemProps}>
        {section.label && (
          <span
            {...headingProps}
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              padding: "2px 5px",
            }}
          >
            {section.label}
          </span>
        )}
        <ul
          {...listBoxProps}
          {...groupProps}
          style={{
            padding: 0,
            listStyle: "none",
          }}
        >
          {section.children &&
            Array.from(section.children).map(node => children(node))}
        </ul>
      </li>
    </>
  )
}

ListBoxSection.displayName = "ListBoxSection"
