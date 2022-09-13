import React from "react"
import { useTreeState, TreeProps } from "@react-stately/tree"
import { AriaMenuOptions, useMenu } from "@react-aria/menu"
// import { TIME_OPTION } from "@Utils/time"

import { MenuItem } from "../MenuItem"

export const Menu = (props: AriaMenuOptions<any> & TreeProps<any>) => {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        margin: 0,
        listStyle: "none",
        width: 246,
        borderRadius: 7,
        backgroundColor: "white",
        padding: "0.375rem 0",
        boxShadow: "0px 3px 9px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* @ts-ignore */}
      {[...state.collection].map(item => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  )
}
Menu.name = "Menu"
