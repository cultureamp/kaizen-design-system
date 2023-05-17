import React from "react"
import classnames from "classnames"
import { CustomButtonProps } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import { MenuItemProps, MenuItem } from "@kaizen/draft-menu"
import styles from "./TitleBlockMenuItem.module.scss"

export type TitleBlockMenuItemProps =
  | ({
      component: (props: CustomButtonProps) => JSX.Element
    } & MenuItemProps)
  | MenuItemProps

export const TitleBlockMenuItem = (
  props: TitleBlockMenuItemProps
): JSX.Element | null => {
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
        <Icon icon={icon} role="presentation" />
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
