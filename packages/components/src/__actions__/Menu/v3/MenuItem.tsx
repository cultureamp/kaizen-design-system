import React from "react"
import {
  MenuItem as RACMenuItem,
  MenuItemProps as RACMenuItemProps,
} from "react-aria-components"
import styles from "./MenuItem.module.scss"

/**
 *
 */
export const MenuItem = (props: RACMenuItemProps): JSX.Element => (
  <RACMenuItem className={styles.item} {...props} />
)
