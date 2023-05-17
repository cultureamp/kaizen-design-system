import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Divider.module.scss"

export interface DividerProps
  extends OverrideClassName<HTMLAttributes<HTMLHRElement>> {
  variant: "content" | "canvas" | "menuSeparator"
  isReversed?: boolean
}

/**
 * {@link https://cultureamp.design/components/divider/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-divider--default-story Storybook}
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
