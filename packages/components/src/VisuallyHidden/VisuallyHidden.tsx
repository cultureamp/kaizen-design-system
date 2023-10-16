import React, { ReactNode, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./VisuallyHidden.module.scss"

export type VisuallyHiddenProps = {
  children: ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const VisuallyHidden = ({
  children,
  classNameOverride,
  ...restProps
}: VisuallyHiddenProps): JSX.Element => (
  <span className={classnames(styles.srOnly, classNameOverride)} {...restProps}>
    {children}
  </span>
)

VisuallyHidden.displayName = "VisuallyHidden"
