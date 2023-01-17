import React from "react"
import classnames from "classnames"
import { CustomButtonProps } from "@kaizen/button"
import { MenuItemProps, MenuItem } from "@kaizen/draft-menu"
import styles from "./TitleBlockMenuItem.module.scss"

export type TitleBlockMenuItemProps =
  | {
      component: (props: CustomButtonProps) => JSX.Element
      automationId?: string
    }
  | MenuItemProps

export const TitleBlockMenuItem = (
  props: TitleBlockMenuItemProps
): JSX.Element | null => {
  const className = classnames(styles.menuItem, {
    [styles["menuItem--destructive"]]: styles.destructive,
    [styles["menuItem--disabled"]]: styles.disabled,
    [styles["menuItem--active"]]: styles.isActive,
  })
  if ("component" in props) {
    return (
      <li className={styles.menuListItem}>
        <props.component
          {...props}
          className={className}
          data-automation-id={props.automationId}
        />
      </li>
    )
  }

  return <MenuItem {...props} />
}
