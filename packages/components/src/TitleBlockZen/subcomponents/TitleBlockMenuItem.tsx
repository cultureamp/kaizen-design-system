import React from "react"
import classnames from "classnames"
import { MenuItem } from "~components/Menu"
import { TitleBlockMenuItemProps } from "../types"
import styles from "./TitleBlockMenuItem.module.scss"

export const TitleBlockMenuItem = (
  props: TitleBlockMenuItemProps
): JSX.Element => {
  const className = classnames(
    styles.menuItem,
    styles.destructive && styles["menuItem--destructive"],
    styles.disabled && styles["menuItem--disabled"],
    styles.isActive && styles["menuItem--active"]
  )

  if ("component" in props) {
    const { component: CustomMenuItem, label, icon, ...otherProps } = props
    const wrappedLabel = <span className={styles.menuItem__Label}>{label}</span>
    const iconNode = icon && (
      <span className={styles.menuItem__Icon}>{icon}</span>
    )
    return (
      <li className={styles.menuListItem}>
        <CustomMenuItem {...otherProps} className={className}>
          {iconNode}
          {wrappedLabel}
        </CustomMenuItem>
      </li>
    )
  }

  return <MenuItem {...props} />
}

TitleBlockMenuItem.displayName = "TitleBlockMenuItem"
