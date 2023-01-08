import { ReactNode, createElement, HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./VisuallyHidden.module.scss"

export type AllowedTags = "div" | "span"

export interface VisuallyHiddenProps
  extends OverrideClassName<HTMLAttributes<HTMLElement>> {
  children: ReactNode
  /**
   * The HTML tag rendered by this component
   */
  tag?: AllowedTags
}

export const VisuallyHidden = ({
  children,
  classNameOverride,
  tag = "span",
  ...otherProps
}: VisuallyHiddenProps): JSX.Element => {
  const className = `${styles.srOnly} ${classNameOverride}`
  return createElement(tag, { ...otherProps, className }, children)
}

VisuallyHidden.displayName = "VisuallyHidden"
