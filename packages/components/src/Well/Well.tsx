import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { WellBorderStyleType, WellVariantType, WellColors } from "./types"
import styles from "./Well.module.scss"

export type WellProps = {
  children?: React.ReactNode
  /** @deprecated This will not fallback to `default` variant. `default` can be used but must be explicitly passed to the Well component. It is recommended to use `color` prop and `gray` value if you need a gray background. */
  variant?: WellVariantType
  /** @default `white` */
  color?: WellColors
  /** @default `solid` */
  borderStyle?: WellBorderStyleType
  noMargin?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604733/Well Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-well--docs Storybook}
 */
export const Well = ({
  children,
  variant,
  color = "white",
  borderStyle = "solid",
  noMargin = false,
  classNameOverride,
  ...restProps
}: WellProps): JSX.Element => (
  <div
    className={classnames(
      styles.container,
      styles[borderStyle],
      styles[color],
      variant && styles[variant],
      noMargin && styles.noMargin,
      classNameOverride,
    )}
    {...restProps}
  >
    {children}
  </div>
)

Well.displayName = "Well"
