import { GridFractions, ResponsiveSpacing, Spacing } from "../types"
import { convertFractionToString } from "./util"

const styles = require("./Margin.module.scss")

export const mt = (unit: GridFractions): string[] => [
  styles[`mt-${convertFractionToString(unit)}`],
]

export const mr = (unit: GridFractions): string[] => [
  styles[`mr-${convertFractionToString(unit)}`],
]

export const mb = (unit: GridFractions): string[] => [
  styles[`mb-${convertFractionToString(unit)}`],
]

export const ml = (unit: GridFractions): string[] => [
  styles[`ml-${convertFractionToString(unit)}`],
]

export const mx = (unit: GridFractions): string[] => [
  styles[`mx-${convertFractionToString(unit)}`],
]

export const my = (unit: GridFractions): string[] => [
  styles[`my-${convertFractionToString(unit)}`],
]

export const m = (unit: ResponsiveSpacing): string[] => {
  const classes: string[] = []
  if (typeof unit === "string") {
    classes.push(styles[`m-${convertFractionToString(unit)}`])
  } else {
    Object.keys(unit).forEach(key => {
      classes.push(styles[`m-${convertFractionToString(unit[key])}--${key}`])
    })
  }

  return classes
}

export const responsiveMarginClasses = ({
  m: margin,
  mt: marginTop,
  mr: marginRight,
  mb: marginBottom,
  ml: marginLeft,
  mx: marginXAxis,
  my: marginYAxis,
}: Spacing): string[] => {
  const classes: string[] = []

  if (margin !== undefined) classes.push(...m(margin))
  if (marginTop !== undefined) classes.push(...mt(marginTop))
  if (marginRight !== undefined) classes.push(...mr(marginRight))
  if (marginBottom !== undefined) classes.push(...mb(marginBottom))
  if (marginLeft !== undefined) classes.push(...ml(marginLeft))
  if (marginXAxis !== undefined) classes.push(...mx(marginXAxis))
  if (marginYAxis !== undefined) classes.push(...my(marginYAxis))

  // if no padding defined on any param, default to 0
  if (
    margin === undefined &&
    marginTop === undefined &&
    marginRight === undefined &&
    marginBottom === undefined &&
    marginLeft === undefined &&
    marginXAxis === undefined &&
    marginYAxis === undefined
  ) {
    classes.push(...m("0"))
  }

  return classes
}
