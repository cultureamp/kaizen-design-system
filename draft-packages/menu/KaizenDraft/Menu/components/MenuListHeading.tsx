import React from "react"
import classnames from "classnames"
import { Heading } from "@kaizen/typography"
import { MenuListProps } from "./MenuList"
import styles from "./MenuListHeading.module.scss"

export type MenuListHeadingProps = Required<Pick<MenuListProps, "heading">> & {
  listHeadingId: string
}

export const MenuListHeading = (props: MenuListHeadingProps): JSX.Element => {
  const { heading, listHeadingId } = props
  const { classNameOverride: headingClassNameOverride, ...headingProps } =
    heading
  return (
    <Heading
      variant="heading-6"
      tag="span"
      classNameOverride={classnames(styles.header, headingClassNameOverride)}
      id={listHeadingId}
      {...headingProps}
    />
  )
}

MenuListHeading.displayName = "MenuListHeading"
