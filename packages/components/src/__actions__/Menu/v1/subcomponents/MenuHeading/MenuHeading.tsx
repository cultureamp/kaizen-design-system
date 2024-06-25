import React from "react"
import classnames from "classnames"
import { Heading, HeadingProps } from "~components/Heading"
import styles from "./MenuHeading.module.scss"

export type MenuHeadingProps = {
  children: React.ReactNode
} & Partial<HeadingProps>

export const MenuHeading = ({
  id,
  classNameOverride,
  ...restProps
}: MenuHeadingProps): JSX.Element => (
  <Heading
    id={id}
    variant="heading-6"
    tag="span"
    classNameOverride={classnames(styles.heading, classNameOverride)}
    {...restProps}
  />
)

MenuHeading.displayName = "MenuHeading"
