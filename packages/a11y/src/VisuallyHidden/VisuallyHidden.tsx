import { ReactNode, createElement, HTMLAttributes } from "react"

import styles from "./VisuallyHidden.module.scss"

export type AllowedTags = "div" | "span"

interface VisuallyHiddenProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: ReactNode
  tag?: AllowedTags
}

export const VisuallyHidden = ({
  children,
  tag = "span",
  ...otherProps
}: VisuallyHiddenProps) => {
  const className = styles.srOnly
  return createElement(tag, { ...otherProps, className }, children)
}
