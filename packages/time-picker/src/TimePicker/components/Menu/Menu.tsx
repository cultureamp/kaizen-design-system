import React from "react"
import { useTreeState, TreeProps } from "@react-stately/tree"
import { AriaMenuOptions, useMenu } from "@react-aria/menu"
import { MenuItem } from "../MenuItem"
import styles from "./Menu.module.scss"
// import { TIME_OPTION } from "@Utils/time"

export const Menu = (props: AriaMenuOptions<any> & TreeProps<any>) => {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul {...menuProps} ref={ref} className={styles.menuContainer}>
      {/* @ts-ignore */}
      {[...state.collection].map(item => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  )
}
Menu.displayName = "Menu"
