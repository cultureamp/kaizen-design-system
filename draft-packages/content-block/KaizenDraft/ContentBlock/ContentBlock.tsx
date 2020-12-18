import * as React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

export interface ContentBlockProps {
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
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  style?: React.CSSProperties
}

export const ContentBlockContainer = React.forwardRef(
  (
    {
      automationId,
      children,
      classNameAndIHaveSpokenToDST,
      style,
    }: ContentBlockProps,
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

export const ContentBlock = React.forwardRef(
  (
    {
      automationId,
      children,
      classNameAndIHaveSpokenToDST,
      style,
    }: ContentBlockProps,
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
