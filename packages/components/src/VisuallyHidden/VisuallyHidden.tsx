import { ReactNode, createElement, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./VisuallyHidden.module.scss"

export type VisuallyHiddenProps = {
  children: ReactNode
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const VisuallyHidden = ({
  children,
  classNameOverride,
  ...otherProps
}: VisuallyHiddenProps): JSX.Element => {
  const className = classnames(styles.srOnly, classNameOverride)
  return createElement("span", { ...otherProps, className }, children)
}

VisuallyHidden.displayName = "VisuallyHidden"
