import classNames from "classnames"
import { createElement } from "react"
import { AllowedTags, Safelist } from "../types"

const styles = require("./Heading.module.scss")

export type HeadingLevel = "0" | "1" | "2" | "3" | "4" | "5" | "6"

export interface HeadingInterface {
  level: HeadingLevel
  tag?: keyof AllowedTags
  children: React.ReactNode
}

export const Heading = ({
  tag,
  level,
  children,
  ...otherProps
}: HeadingInterface & Safelist) => {
  const inferredTag = tag === undefined ? translateScaleToTag(level) : tag

  const classes: string[] = [styles.heading, styles[`heading-${level}`]]

  return createElement(
    inferredTag,
    { ...otherProps, className: classNames(classes) },
    children
  )
}

const translateScaleToTag = (scale: HeadingLevel) => {
  switch (scale) {
    case "0":
    case "1":
      return "h1"
    case "2":
      return "h2"
    case "3":
      return "h3"
    case "4":
      return "h4"
    case "5":
      return "h5"
    case "6":
    default:
      return "h6"
  }
}
