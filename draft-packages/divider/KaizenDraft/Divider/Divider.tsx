import React, { HTMLAttributes } from "react"
import classNames from "classnames"
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
    className={classNames(styles.wrapper, classNameOverride, {
      [styles.reversed]: isReversed,
      [styles.content]: variant === "content",
      [styles.canvas]: variant === "canvas",
      [styles.menuSeparator]: variant === "menuSeparator",
    })}
    {...props}
  />
)

Divider.displayName = "Divider"
