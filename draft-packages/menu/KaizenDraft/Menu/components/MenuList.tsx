import * as React from "react"
import styles from "../styles.scss"

type MenuListProps = {
  heading?: React.ReactNode
  children: React.ReactNode
}

const MenuList = (props: MenuListProps) => {
  const { heading, children } = props
  return (
    <>
      {heading && <span className={styles.header}>{heading}</span>}
      <ul className={styles.menuSection}>{children}</ul>
    </>
  )
}

MenuList.displayName = "MenuList"

export default MenuList
