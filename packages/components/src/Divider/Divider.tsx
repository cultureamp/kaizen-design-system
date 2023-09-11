import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Divider.module.scss"

export type DividerProps = {
  variant: "content" | "canvas" | "menuSeparator"
  isReversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082061035/Divider Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-divider--docs Storybook}
 */
export const Divider = ({
  variant,
  isReversed = false,
  classNameOverride,
  ...props
}: DividerProps): JSX.Element => (
  <hr
    aria-hidden="true"
    className={classnames(
      styles.wrapper,
      classNameOverride,
      isReversed && styles.reversed,
      styles[variant]
    )}
    {...props}
  />
)

Divider.displayName = "Divider"
