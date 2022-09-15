import React from "react"
import { useMenuItem } from "@react-aria/menu"
import { TreeState } from "@react-stately/tree"
import { TIME_OPTION } from "../../utils"
import styles from "./MenuItem.module.scss"
import { Node } from "./types"

export const MenuItem = ({
  item,
  state,
}: {
  item: Node<TIME_OPTION>
  state: TreeState<TIME_OPTION>
}) => {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isFocused } = useMenuItem(
    { key: item.key },
    state,
    ref
  )
  return (
    <li {...menuItemProps} ref={ref} className={styles.menuItem}>
      {item.rendered}
    </li>
  )
}
MenuItem.displayName = "MenuItem"
