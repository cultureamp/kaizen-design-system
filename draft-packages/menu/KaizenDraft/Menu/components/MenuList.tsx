import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./MenuList.module.scss"

export interface MenuListProps
  extends OverrideClassName<HTMLAttributes<HTMLUListElement>> {
  children: React.ReactNode
}

export const MenuList = (props: MenuListProps): JSX.Element => {
  const { children, ...restProps } = props
  return (
    <ul className={styles.menuSection} {...restProps}>
      {children}
    </ul>
  )
}

MenuList.displayName = "MenuList"
