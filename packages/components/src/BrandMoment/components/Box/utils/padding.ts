

import { GridFractions, Spacing } from "../Box"
import { convertFractionToString } from "./convertFractionToString"
import styles from "./Padding.module.scss"

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

export const p = (unit: GridFractions): string[] => {
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

export const paddingClasses = ({
  p: padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingXAxis,
  py: paddingYAxis,
  rtl = false,
}: { rtl?: boolean } & Spacing): string[] => {
  const classes: string[] = []

  if (padding !== undefined) classes.push(...p(padding))
  if (paddingTop !== undefined) classes.push(...pt(paddingTop))
  if (paddingBottom !== undefined) classes.push(...pb(paddingBottom))
  if (paddingXAxis !== undefined) classes.push(...px(paddingXAxis))
  if (paddingYAxis !== undefined) classes.push(...py(paddingYAxis))

  if (rtl) {
    // for RTL languages, swap the left and right padding
    if (paddingRight !== undefined) classes.push(...pl(paddingRight))
    if (paddingLeft !== undefined) classes.push(...pr(paddingLeft))
  } else {
    if (paddingRight !== undefined) classes.push(...pr(paddingRight))
    if (paddingLeft !== undefined) classes.push(...pl(paddingLeft))
  }

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
