import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { WellBorderStyleType, WellVariantType } from "./types"
import styles from "./Well.module.scss"

export type WellProps = {
  children?: React.ReactNode
  variant?: WellVariantType
  borderStyle?: WellBorderStyleType
  noMargin?: boolean
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3075604733/Well Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-well--docs Storybook}
 */
export const Well = ({
  children,
  variant = "default",
  borderStyle = "solid",
  noMargin = false,
  classNameOverride,
  ...restProps
}: WellProps): JSX.Element => (
  <div
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
