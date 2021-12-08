import * as React from "react"
import { v4 } from "uuid"
import styles from "../styles.scss"

type MenuListProps = {
  heading?: React.ReactNode
  children: React.ReactNode
}

const listHeadingID = v4()
const MenuList = (props: MenuListProps) => {
  const { heading, children } = props
  return (
    <>
      {heading && (
        <span className={styles.header} id={listHeadingID}>
          {heading}
        </span>
      )}
      <ul
        className={styles.menuSection}
        aria-labelledby={heading ? listHeadingID : undefined}
      >
        {children}
      </ul>
    </>
  )
}

MenuList.displayName = "MenuList"

export default MenuList
