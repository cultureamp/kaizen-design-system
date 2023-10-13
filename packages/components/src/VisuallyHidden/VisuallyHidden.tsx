import { ReactNode, createElement, HTMLAttributes } from "react"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./VisuallyHidden.module.scss"

export type AllowedTags = "div" | "span"

export type VisuallyHiddenProps = {
  children: ReactNode
  /**
   * The HTML tag rendered by this component
   */
  tag?: AllowedTags
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const VisuallyHidden = ({
  children,
  classNameOverride,
  tag = "span",
  ...otherProps
}: VisuallyHiddenProps): JSX.Element => {
  const className = `${styles.srOnly} ${classNameOverride || ""}`
  return createElement(tag, { ...otherProps, className }, children)
}

VisuallyHidden.displayName = "VisuallyHidden"
