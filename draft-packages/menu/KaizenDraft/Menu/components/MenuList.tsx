import React, { HTMLAttributes, cloneElement, useState } from "react"
import { v4 } from "uuid"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./MenuList.module.scss"

export interface MenuListProps
  extends OverrideClassName<HTMLAttributes<HTMLUListElement>> {
  heading?: JSX.Element
  children: React.ReactNode
}

export const MenuList = (props: MenuListProps): JSX.Element => {
  const [listHeadingID] = useState<string>(v4())
  const { heading, children, ...restProps } = props
  return (
    <>
      {heading && cloneElement(heading, { id: listHeadingID })}
      <ul
        className={styles.menuSection}
        aria-labelledby={heading ? listHeadingID : undefined}
        {...restProps}
      >
        {children}
      </ul>
    </>
  )
}

MenuList.displayName = "MenuList"
