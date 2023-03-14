import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./Well.module.scss"

type VariantType =
  | "positive"
  | "negative"
  | "informative"
  | "cautionary"
  | "default"
  | "assertive"
  | "prominent"

type BorderStyleType = "solid" | "dashed" | "none"

export interface WellProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children?: React.ReactNode
  variant?: VariantType
  borderStyle?: BorderStyleType
  noMargin?: boolean
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * {@link https://cultureamp.design/components/well/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-well--assertive Storybook}
 */
export const Well = ({
  children,
  variant = "default",
  borderStyle = "solid",
  noMargin = false,
  automationId,
  classNameOverride,
  ...restProps
}: WellProps): JSX.Element => (
  <div
    data-automation-id={automationId}
    className={classnames(
      styles.container,
      styles[borderStyle],
      styles[variant],
      noMargin && styles.noMargin,
      classNameOverride
    )}
    {...restProps}
  >
    {children}
  </div>
)

Well.displayName = "Well"
