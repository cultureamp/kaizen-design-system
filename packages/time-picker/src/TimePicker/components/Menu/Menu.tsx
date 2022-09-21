import React from "react"
import { useTreeState, TreeProps } from "@react-stately/tree"
import { AriaMenuOptions, useMenu } from "@react-aria/menu"
import { MenuItem } from "../MenuItem"
import { TIME_OPTION } from "../../utils"
import styles from "./Menu.module.scss"

export const Menu = (
  props: AriaMenuOptions<TIME_OPTION> & TreeProps<TIME_OPTION>
) => {
  const state = useTreeState(props)
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul {...menuProps} ref={ref} className={styles.menuContainer}>
      {[...Array.from(state.collection)].map(item => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  )
}
Menu.displayName = "Menu"
