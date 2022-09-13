import React from "react"
import { useMenuItem } from "@react-aria/menu"
import { TreeState } from "@react-stately/tree"
// import { TIME_OPTION } from "@Utils/time"

// import { Node } from "./types"

export const MenuItem = ({
  item,
  state,
}: {
  item: any
  state: TreeState<any>
}) => {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isFocused } = useMenuItem(
    { key: item.key },
    state,
    ref
  )
  return (
    <li
      {...menuItemProps}
      ref={ref}
      style={{
        background: isFocused ? "#e6f6ff" : "transparent",
        color: isFocused ? "#0168b3" : "#2f2438",
        padding: "6px calc(0.75rem - 2px)",
        margin: "0 0.375rem",
        minHeight: " calc(1.75 * 1.5rem)",
        display: "flex",
        alignItems: "center",
        outline: "none",
        cursor: "default",
        borderRadius: 4,
        justifyContent: "space-between",
      }}
    >
      {item.rendered}
    </li>
  )
}
MenuItem.name = "MenuItem"
