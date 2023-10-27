import React from "react"
import classnames from "classnames"
import { CustomButtonProps } from "~components/Button"
import { MeatballsIcon } from "~components/Icon"
import { MenuItem, MenuItemProps } from "~components/Menu"
import styles from "./TitleBlockMenuItem.module.scss"

export type TitleBlockMenuItemProps =
  | ({
      component: (props: CustomButtonProps) => JSX.Element
    } & MenuItemProps)
  | MenuItemProps

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
      <span className={styles.menuItem__Icon}>
        {/* {icon} */}
        <MeatballsIcon role="presentation" />
      </span>
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
