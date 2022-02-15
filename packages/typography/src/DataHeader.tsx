import classNames from "classnames"
import React, { createElement, HTMLAttributes } from "react"

import styles from "./DataHeader.scss"

export type HeadingVariants = "heading-1" | "heading-2" | "heading-3"

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
  | "label"

export type AllowedColors =
  | "dark"
  | "dark-reduced-opacity"
  | "white"
  | "white-reduced-opacity"
  | "positive"
  | "negative"

export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  // /**
  //  * Not recommended. A short-circuit for overriding styles in a pinch
  //  * @default ""
  //  */
  classNameAndIHaveSpokenToDST?: string
  /**
   * HTML elements that are allowed on Headings. When not supplied, the tag is inferred from
   * the variant. E.g. display-0 will infer h1
   */
  tag?: AllowedTags
  /**
   * Allowed heading variants
   */
  variant: HeadingVariants
  locale: string
  unitType: UnitType
  value: number
  color?: AllowedColors
}

type UnitType = "currency" | "liter" | "percentage"

export const DataHeader = ({
  locale,
  unitType,
  value,
  classNameAndIHaveSpokenToDST,
  tag,
  variant = "heading-3",
  color = "dark",
  ...props
}: HeadingProps) => {
  const inferredTag =
    tag === undefined ? translateHeadingLevelToTag(variant) : tag

  const className = classNames([
    styles.heading,
    styles[variant],
    classNameAndIHaveSpokenToDST,
    styles[color],
  ])

  return createElement(
    inferredTag,
    { ...props, className },
    <Child locale={locale} />
  )
}

/**
 * A helper to infer the tag when not explicitly passed as a prop
 * @param headingLevel Level of the heading
 */
const translateHeadingLevelToTag = (headingLevel: HeadingVariants) => {
  switch (headingLevel) {
    case "heading-1":
      return "h1"
    case "heading-2":
      return "h2"
    case "heading-3":
      return "h3"
    default:
      return "h1"
  }
}

function useCurrency(locale, currencyCode) {
  const c = React.useCallback(
    num =>
      Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
      }).formatToParts(num),
    [locale, currencyCode]
  )
  return { c }
}

function useUnit(locale, unit) {
  const u = React.useCallback(
    num =>
      Intl.NumberFormat(locale, {
        style: "unit",
        unit,
        unitDisplay: "short",
      }).formatToParts(num),
    [locale, unit]
  )
  return { u }
}

function usePercent(locale) {
  const p = React.useCallback(
    num =>
      Intl.NumberFormat(locale, {
        style: "unit",
        unit: "percent",
      }).formatToParts(num),
    [locale]
  )
  return { p }
}

function useGetStuff(f) {
  const str = React.useMemo(() => {
    const item = f(2240)
    return renderer(item)
  }, [f])
  return str
}

function renderer(groups) {
  return groups.map(({ type, value }) => {
    switch (type) {
      case "unit":
      case "currency":
        return <span className={styles.unit}>{value}</span>
      default:
        return value
    }
  })
}

const Child = ({ locale }) => {
  const { c } = useCurrency(locale, "USD")
  const { u } = useUnit(locale, "liter")
  const { p } = usePercent(locale)
  const currency = useGetStuff(c)
  const liters = useGetStuff(u)
  const percent = useGetStuff(p)

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        Currency: <h4 className="not-hit">{currency}</h4>
      </div>
      <div className={styles.row}>
        Liters: <h4 className="not-hit">{liters}</h4>
      </div>
      <div className={styles.row}>
        Percent: <h4 className="not-hit">{percent}</h4>
      </div>
    </div>
  )
}
