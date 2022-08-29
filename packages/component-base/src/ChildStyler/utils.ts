import classnames from "classnames"
import styles from "./ChildStyler.module.scss"

export type MarginOptions = "none" | "1" | "xs"

export interface StylerOptions {
  margin?:
    | MarginOptions
    | {
        top?: MarginOptions
        bottom?: MarginOptions
        left?: MarginOptions
        right?: MarginOptions
      }
}

export const getMarginClassNames = (margin: StylerOptions["margin"]) => {
  if (typeof margin === "string") return styles[`margin-${margin}`]

  return classnames(
    margin?.top && styles[`margin-top-${margin.top}`],
    margin?.bottom && styles[`margin-bottom-${margin.bottom}`],
    margin?.left && styles[`margin-left-${margin.left}`],
    margin?.right && styles[`margin-right-${margin.right}`]
  )
}
