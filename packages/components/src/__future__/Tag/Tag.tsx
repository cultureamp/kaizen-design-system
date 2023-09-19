import React, { ReactNode, HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Tag.module.scss"

export type TagColors =
  | "gray"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"

export interface TagProps
  extends OverrideClassName<HTMLAttributes<HTMLSpanElement>> {
  children: ReactNode
  color?: TagColors
  Icon?: React.ReactElement
}

export const Tag = ({
  children,
  classNameOverride,
  Icon,
  color = "gray",
}: TagProps): JSX.Element => (
  <span
    className={classNames(styles.container, styles[color], classNameOverride)}
  >
    {Icon && <span className={styles.iconContainer}>{Icon}</span>}
    {children}
  </span>
)

Tag.displayName = "Tag"
