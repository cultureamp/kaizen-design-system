import React from "react"
import { useMenuItem } from "@react-aria/menu"
import { TreeState } from "@react-stately/tree"
import classnames from "classnames"
import { TimeOption } from "../../types"
import styles from "./MenuItem.module.scss"
import { Node } from "./types"

export const MenuItem = ({
  item,
  state,
}: {
  item: Node<TimeOption>
  state: TreeState<TimeOption>
}) => {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isSelected } = useMenuItem(
    { key: item.key },
    state,
    ref
  )
  return (
    <li
      {...menuItemProps}
      ref={ref}
      className={classnames(styles.menuItem, isSelected && styles.isSelected)}
    >
      {item.rendered}
    </li>
  )
}
MenuItem.displayName = "MenuItem"
