import { GridFractions, ResponsiveSpacing, Spacing } from "../types"
import { convertFractionToString } from "./util"

const styles = require("./Padding.module.scss")

export const pt = (unit: GridFractions): string[] => [
  styles[`pt-${convertFractionToString(unit)}`],
]

export const pr = (unit: GridFractions): string[] => [
  styles[`pr-${convertFractionToString(unit)}`],
]

export const pb = (unit: GridFractions): string[] => [
  styles[`pb-${convertFractionToString(unit)}`],
]

export const pl = (unit: GridFractions): string[] => [
  styles[`pl-${convertFractionToString(unit)}`],
]

export const px = (unit: GridFractions): string[] => [
  styles[`pl-${convertFractionToString(unit)}`],
  styles[`pr-${convertFractionToString(unit)}`],
]

export const py = (unit: GridFractions): string[] => [
  styles[`pt-${convertFractionToString(unit)}`],
  styles[`pb-${convertFractionToString(unit)}`],
]

export const p = (unit: ResponsiveSpacing): string[] => {
  const classes: string[] = []
  if (typeof unit === "number") {
    classes.push(styles[`p-${convertFractionToString(unit)}`])
  } else {
    Object.keys(unit).forEach(key => {
      classes.push(styles[`p-${convertFractionToString(unit[key])}--${key}`])
    })
  }

  return classes
}

// @TODO - i18n. Use padding before / padding after
export const responsivePaddingClasses = ({
  p: padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingXAxis,
  py: paddingYAxis,
}: Spacing): string[] => {
  const classes: string[] = []

  if (padding !== undefined) classes.push(...p(padding))
  if (paddingTop !== undefined) classes.push(...pt(paddingTop))
  if (paddingRight !== undefined) classes.push(...pr(paddingRight))
  if (paddingBottom !== undefined) classes.push(...pb(paddingBottom))
  if (paddingLeft !== undefined) classes.push(...pl(paddingLeft))
  if (paddingXAxis !== undefined) classes.push(...px(paddingXAxis))
  if (paddingYAxis !== undefined) classes.push(...py(paddingYAxis))

  // if no padding defined on any param, default to 0
  if (
    padding === undefined &&
    paddingTop === undefined &&
    paddingRight === undefined &&
    paddingBottom === undefined &&
    paddingLeft === undefined &&
    paddingXAxis === undefined &&
    paddingYAxis === undefined
  ) {
    classes.push(...p(0))
  }
  return classes
}
