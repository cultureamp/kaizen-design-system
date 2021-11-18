import React, { ReactNode, forwardRef, LiHTMLAttributes } from "react"
import classnames from "classnames"
import styles from "./styles.scss"

export interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isHighlighted?: boolean
  children: ReactNode
}

export const MenuItem = forwardRef((props: MenuItemProps, ref) => {
  const { isHighlighted, children } = props
  return (
    <li
      className={classnames(styles.menuItem, {
        [styles.isHighlighted]: isHighlighted,
      })}
      ref={ref}
      {...props}
    >
      {children}
    </li>
  )
})
