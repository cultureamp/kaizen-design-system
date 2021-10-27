import * as React from "react"
import uuid from "uuid/v4"
import styles from "../styles.scss"

type MenuListProps = {
  heading?: React.ReactNode
  children: React.ReactNode
}

const MenuList = (props: MenuListProps) => {
  const { heading, children } = props
  const listHeadingID = uuid()
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
