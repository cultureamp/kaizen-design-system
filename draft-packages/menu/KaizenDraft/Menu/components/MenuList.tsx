import React, { useState } from "react"
import classnames from "classnames"
import { v4 } from "uuid"
import { Heading, HeadingProps } from "@kaizen/typography"
import styles from "./MenuList.module.scss"

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export type MenuListProps = {
  heading?: Optional<HeadingProps, "variant">
  children: React.ReactNode
}

export const MenuList = (props: MenuListProps): JSX.Element => {
  const { heading, children } = props
  const { classNameOverride: headingClassNameOverride, ...headingProps } =
    heading
  const [listHeadingID] = useState<string>(heading.id || v4())
  return (
    <>
      {heading && (
        <Heading
          variant="heading-6"
          tag="span"
          classNameOverride={classnames(
            styles.header,
            headingClassNameOverride
          )}
          id={listHeadingID}
          {...headingProps}
        />
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
