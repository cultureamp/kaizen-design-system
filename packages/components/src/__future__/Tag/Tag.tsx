import React, { ReactNode, HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Tag.module.scss"
import { TagColors } from "./types"

export interface TagProps
  extends OverrideClassName<HTMLAttributes<HTMLSpanElement>> {
  children: ReactNode
  color?: TagColors
  icon?: React.ReactElement
}

export const Tag = ({
  children,
  classNameOverride,
  icon,
  color = "gray",
}: TagProps): JSX.Element => (
  <span
    className={classNames(styles.container, styles[color], classNameOverride)}
  >
    {icon && <span className={styles.iconContainer}>{icon}</span>}
    {children}
  </span>
)

Tag.displayName = "Tag"

export { TagColors }
