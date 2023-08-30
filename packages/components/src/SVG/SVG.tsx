import React, { ReactNode, SVGAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./SVG.module.scss"

type BaseSVGProps = {
  inheritSize?: boolean
} & OverrideClassName<SVGAttributes<SVGElement>>

type MeaningfulIcon = {
  role: "img"
  "aria-label": string
} & OverrideClassName<SVGAttributes<SVGElement>>

type DecorativeIcon = {
  role: "presentation"
  "aria-label"?: never
}

export type IconProps = BaseSVGProps & (MeaningfulIcon | DecorativeIcon)
export type SVGProps = IconProps & {
  children: ReactNode
}

/**
 * {@link https://cultureamp.design/?path=/docs/components-icon--meaningful-kaizen-site-demo Storybook}
 */
export const SVG = ({
  inheritSize = false,
  role,
  viewBox = "0 0 20 20",
  classNameOverride,
  children,
  ...restProps
}: SVGProps): JSX.Element => {
  const classes = classnames(
    styles.icon,
    classNameOverride,
    inheritSize && styles.inheritSize
  )

  if (role === "presentation") {
    return (
      <svg
        className={classes}
        viewBox={viewBox}
        role={role}
        aria-hidden={true}
        {...restProps}
      >
        {children}
      </svg>
    )
  }

  return (
    <svg role={role} className={classes} viewBox={viewBox} {...restProps}>
      {children}
    </svg>
  )
}

SVG.displayName = "SVG"
