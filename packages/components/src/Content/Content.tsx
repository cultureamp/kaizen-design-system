import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Content.module.scss"

export type ContentProps = {
  children?: React.ReactNode
  /**
   * Not recommended. A short-circuit for dynamically overriding layout in a pinch
   */
  style?: Pick<
    React.CSSProperties,
    | "bottom"
    | "left"
    | "margin"
    | "marginBottom"
    | "marginLeft"
    | "marginRight"
    | "marginTop"
    | "padding"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "position"
    | "right"
    | "top"
    | "transform"
    | "transformBox"
    | "transformOrigin"
    | "transformStyle"
  >
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3086156812/Layout Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-content--docs Storybook}
 */
export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, style, classNameOverride, ...restProps }, ref) => (
    <div
      ref={ref}
      className={classnames(styles.content, classNameOverride)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  )
)

Content.displayName = "Content"
