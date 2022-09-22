import React from "react"
import classNames from "classnames"
import { useListBoxSection } from "@react-aria/listbox"
import { useSeparator } from "@react-aria/separator"
import { Node } from "@react-types/shared"
import { ItemType } from "../../types"

export interface ListBoxSectionProps {
  section: Array<Node<ItemType>>
  children: (item: Node<ItemType>) => React.ReactNode
}

export const ListBoxSection: React.VFC<ListBoxSectionProps> = ({
  section,
  children,
}) => (
  // <>
  //   {section.value !== state.collection.getFirstKey() && (
  //     <li {...separatorProps} />
  //   )}
  //   <li {...itemProps}>
  //     {section.label && (
  //       <span {...headingProps} className={classNames(styles.sectionLabel)}>
  //         {section.label}
  //       </span>
  //     )}

  //     <ul {...groupProps} className={classNames(styles.section)}>
  //       {section.children &&
  //         Array.from(section.children).map(node => children(node))}
  //     </ul>
  //   </li>
  // </>
  <>{Array.from(section).map(node => children(node))}</>
)

ListBoxSection.displayName = "ListBoxSection"
