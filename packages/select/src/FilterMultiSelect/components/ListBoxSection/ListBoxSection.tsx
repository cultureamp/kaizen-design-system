import React, { useState, useEffect } from "react"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { useListBoxSection } from "@react-aria/listbox"
import { useSelectionContext } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import { FilterMultiSelect } from "../../FilterMultiSelect"
import styles from "./ListBox.scss"

export interface ListBoxSectionProps {
  section: Node<ItemType>
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBoxSection: React.VFC<ListBoxSectionProps> = ({
  section,
  children,
}) => {
  const { selectionState: state, listBoxProps } = useSelectionContext()

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  })

  // const { separatorProps } = useSeparator({
  //   elementType: "li",
  // })

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          // {...separatorProps}
          style={{
            borderTop: "1px solid gray",
            margin: "2px 5px",
          }}
        />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <span
            {...headingProps}
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              padding: "2px 5px",
            }}
          >
            {section.rendered}
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
          {section.childNodes &&
            Array.from(section.childNodes).map(node => children(node))}
        </ul>
      </li>
    </>
  )
}

ListBoxSection.displayName = "ListBoxSection"
