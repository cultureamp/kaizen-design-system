import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Header.module.scss"

export interface HeaderProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({
  children,
  classNameOverride,
}): JSX.Element => (
  <div className={classnames(styles.header, classNameOverride)}>{children}</div>
)

Header.displayName = "Header"
