import React, { HTMLAttributes, cloneElement, useId } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./MenuList.module.scss"

export type MenuListProps = {
  heading?: JSX.Element
  children: React.ReactNode
} & OverrideClassName<HTMLAttributes<HTMLUListElement>>

export const MenuList = (props: MenuListProps): JSX.Element => {
  const { heading, children, ...restProps } = props
  const reactId = useId()
  const listHeadingID = heading?.props.id ?? reactId

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
