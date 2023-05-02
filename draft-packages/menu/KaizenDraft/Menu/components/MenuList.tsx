import React, { useState } from "react"
import { v4 } from "uuid"
import { Heading, HeadingProps } from "@kaizen/typography"
import styles from "./MenuList.module.scss"

export type MenuListProps = {
  heading?: React.ReactNode
  headingProps?: Omit<Partial<HeadingProps>, "children">
  children: React.ReactNode
}

export const MenuList = (props: MenuListProps): JSX.Element => {
  const [listHeadingID] = useState<string>(v4())
  const { heading, headingProps, children } = props
  return (
    <>
      {heading && (
        <Heading
          variant="heading-6"
          tag="span"
          classNameOverride={styles.header}
          id={listHeadingID}
          {...headingProps}
        >
          {heading}
        </Heading>
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
