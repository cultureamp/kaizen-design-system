import React from "react"
import classnames from "classnames"
import { Heading, HeadingProps } from "@kaizen/typography"
import styles from "./MenuHeading.module.scss"

export interface MenuHeadingProps extends Partial<HeadingProps> {
  children: React.ReactNode
}

export const MenuHeading = (props: MenuHeadingProps): JSX.Element => {
  const { id, classNameOverride, ...restProps } = props
  return (
    <Heading
      id={id}
      variant="heading-6"
      tag="span"
      classNameOverride={classnames(styles.heading, classNameOverride)}
      {...restProps}
    />
  )
}

MenuHeading.displayName = "MenuHeading"
