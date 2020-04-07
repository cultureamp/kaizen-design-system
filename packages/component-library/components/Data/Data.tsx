import classNames from "classnames"
import * as React from "react"

const styles = require("./Data.module.scss")

export type DataVariants = "large" | "medium" | "small"

export type AllowedTags =
  | "pre"
  | "p"
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

export type AllowedColors = "dark" | "positive" | "negative"

export interface DataProps {
  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string
  children: React.ReactNode
  /**
   * HTML elements that are allowed on Datas. When not supplied, the tag is inferred from
   * the variant. E.g. display-0 will infer h1
   */
  tag?: AllowedTags
  /**
   * Allowed Data variants
   */
  variant: DataVariants
  /**
   * The color variants that are allowed on the Data
   * @default "dark"
   */
  color?: AllowedColors
  /**
   * Units should go here. +/- should be added to the children of the component, rather than the unit
   */
  before?: string
  /**
   * Units should go here
   */
  after?: string
}

export const Data = ({
  classNameAndIHaveSpokenToDST,
  children,
  tag = "div",
  variant,
  color = "dark",
  before = "",
  after = "",
  ...otherProps
}: DataProps) => {
  const wrapperClasses: string[] = [
    styles.Data,
    styles[variant],
    styles[color],
    classNameAndIHaveSpokenToDST,
  ]

  const renderedChildrenClasses = classNames(styles[`units-${variant}`])

  /**
   * Future improvements - change ordering of prefix/suffix based on locale
   */
  const renderedChildren = (
    <div>
      {before && <span className={renderedChildrenClasses}>{before}</span>}
      <span>{children}</span>
      {after && <span className={renderedChildrenClasses}>{after}</span>}
    </div>
  )

  return React.createElement(
    tag,
    { ...otherProps, className: classNames(wrapperClasses) },
    renderedChildren
  )
}
