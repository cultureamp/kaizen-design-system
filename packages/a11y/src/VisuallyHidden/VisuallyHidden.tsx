import { ReactNode, createElement, HTMLAttributes } from "react"

import styles from "./VisuallyHidden.module.scss"

export type AllowedTags = "div" | "span"

export interface VisuallyHiddenProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: ReactNode
  /**
   * The HTML tag rendered by this component
   */
  tag?: AllowedTags
}

export const VisuallyHidden: React.VFC<VisuallyHiddenProps> = ({
  children,
  tag = "span",
  ...otherProps
}) => {
  const className = styles.srOnly
  return createElement(tag, { ...otherProps, className }, children)
}
