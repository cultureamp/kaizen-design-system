import * as React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

export interface ContentProps {
  /**
   * Uniquely identify this component for testing purposes
   * @default ""
   */
  automationId?: string
  children?: React.ReactNode

  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string

  /**
   * Not recommended. A short-circuit for dynamically overriding layout in a pinch
   * @default ""
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
}

export const Container = React.forwardRef(
  (
    {
      automationId,
      children,
      classNameAndIHaveSpokenToDST,
      style,
    }: ContentProps,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      data-automation-id={automationId}
      ref={ref}
      className={classNames(styles.container, classNameAndIHaveSpokenToDST)}
      style={style}
    >
      {children}
    </div>
  )
)

export const Content = React.forwardRef(
  (
    {
      automationId,
      children,
      classNameAndIHaveSpokenToDST,
      style,
    }: ContentProps,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <div
      data-automation-id={automationId}
      ref={ref}
      className={classNames(styles.content, classNameAndIHaveSpokenToDST)}
      style={style}
    >
      {children}
    </div>
  )
)
