import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./styles.module.scss"

export interface DividerProps
  extends OverrideClassName<HTMLAttributes<HTMLHRElement>> {
  variant: "content" | "canvas" | "menuSeparator"
  isReversed?: boolean
}

export const Divider: React.VFC<DividerProps> = ({
  variant,
  isReversed = false,
  classNameOverride,
  ...props
}) => (
  <hr
    aria-hidden="true"
    className={classNames(styles.wrapper, classNameOverride, {
      [styles.reversed]: isReversed,
      [styles.content]: variant === "content",
      [styles.canvas]: variant === "canvas",
      [styles.menuSeparator]: variant === "menuSeparator",
    })}
    {...props}
  />
)
