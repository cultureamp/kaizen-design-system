import React, { ReactNode, HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { TagColors } from "./types"
import styles from "./Tag.module.scss"

export type TagProps = {
  children: ReactNode
  color?: TagColors
  icon?: React.ReactElement
} & OverrideClassName<HTMLAttributes<HTMLSpanElement>>

export const Tag = ({
  children,
  classNameOverride,
  icon,
  color = "gray",
  ...restProps
}: TagProps): JSX.Element => (
  <span
    className={classNames(styles.tag, styles[color], classNameOverride)}
    {...restProps}
  >
    {icon && <span className={styles.iconContainer}>{icon}</span>}
    {children}
  </span>
)

Tag.displayName = "Tag"
