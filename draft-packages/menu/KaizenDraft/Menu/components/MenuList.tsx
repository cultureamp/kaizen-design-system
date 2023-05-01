import React from "react"
import { v4 } from "uuid"
import styles from "./MenuList.module.scss"

export type MenuListProps = {
  heading?: React.ReactNode
  children: React.ReactNode
}

const listHeadingID = v4()

export const MenuList = (props: MenuListProps): JSX.Element => {
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
