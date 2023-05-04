import React, { useState } from "react"
import { v4 } from "uuid"
import { HeadingProps } from "@kaizen/typography"
import { MenuListHeading } from "./MenuListHeading"
import styles from "./MenuList.module.scss"

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
type HeadingPropsOptionalVariant = Optional<HeadingProps, "variant">

export type MenuListProps = {
  heading?: HeadingPropsOptionalVariant
  children: React.ReactNode
}

export const MenuList = (props: MenuListProps): JSX.Element => {
  const { heading, children } = props
  const [listHeadingId] = useState<string>(heading?.id || v4())
  return (
    <>
      {heading && (
        <MenuListHeading heading={heading} listHeadingId={listHeadingId} />
      )}
      <ul
        className={styles.menuSection}
        aria-labelledby={heading ? listHeadingId : undefined}
      >
        {children}
      </ul>
    </>
  )
}

MenuList.displayName = "MenuList"
