import React, { ReactNode, forwardRef, HTMLAttributes } from "react"
import styles from "./styles.scss"

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export const MenuList = forwardRef((props: MenuListProps, ref) => {
  const { children } = props
  return (
    <ul className={styles.menuList} ref={ref} {...props}>
      {children}
    </ul>
  )
})
