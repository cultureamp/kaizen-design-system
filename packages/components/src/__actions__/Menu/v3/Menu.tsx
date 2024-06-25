import React from "react"
import {
  Menu as RACMenu,
  MenuProps as RACMenuProps,
} from "react-aria-components"
import styles from "./Menu.module.scss"

export type MenuProps = Omit<
  // @todo: what does it want here?
  RACMenuProps<any>,
  | "selectionMode"
  | "disallowEmptySelection"
  | "selectedKeys"
  | "defaultSelectedKeys"
>

/**
 *
 */
export const Menu = (props: MenuProps): JSX.Element => (
  <RACMenu className={styles.menu} {...props} />
)
