import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./styles.scss"

export interface ContentProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
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
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

export const Container = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, style, automationId, classNameOverride, ...restProps }, ref) => (
    <div
      data-automation-id={automationId}
      ref={ref}
      className={classNames(styles.container, classNameOverride)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  )
)

Container.displayName = "Container"

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, style, automationId, classNameOverride, ...restProps }, ref) => (
    <div
      data-automation-id={automationId}
      ref={ref}
      className={classNames(styles.content, classNameOverride)}
      style={style}
      {...restProps}
    >
      {children}
    </div>
  )
)

Content.displayName = "Content"
