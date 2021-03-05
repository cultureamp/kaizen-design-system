import * as React from "react"
import informativeIcon from "@kaizen/component-library/icons/information.icon.svg"
import positiveIcon from "@kaizen/component-library/icons/success.icon.svg"
import negativeIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import styles from "./styles.scss"
import { Size, Variant } from "./types"

export const mapVariantToBoxClass = (variant: Variant): string => {
  switch (variant) {
    case "informative":
      return styles.informativeBox
    case "positive":
      return styles.positiveBox
    case "negative":
      return styles.negativeBox
    case "cautionary":
      return styles.cautionaryBox
    default:
      return styles.defaultBox
  }
}

export const mapVariantToIconClass = (variant: Variant) => {
  switch (variant) {
    case "informative":
      return styles.informativeIcon
    case "positive":
      return styles.positiveIcon
    case "negative":
      return styles.negativeIcon
    case "cautionary":
      return styles.cautionaryIcon
    default:
      return undefined
  }
}

export const mapVariantToIcon = (
  variant: Variant
): React.SVGAttributes<SVGSymbolElement> => {
  switch (variant) {
    case "informative":
      return informativeIcon
    case "positive":
      return positiveIcon
    case "negative":
      return negativeIcon
    case "cautionary":
      return negativeIcon
    default:
      return informativeIcon
  }
}

export const mapArrowVariantToClass = (variant: Variant): string => {
  switch (variant) {
    case "informative":
      return styles.informativeArrow
    case "positive":
      return styles.positiveArrow
    case "negative":
      return styles.negativeArrow
    case "cautionary":
      return styles.cautionaryArrow
    default:
      return styles.defaultArrow
  }
}

export const mapSizeToClass = (size: Size): string => {
  switch (size) {
    case "large":
      return styles.large
    default:
      return ""
  }
}

export const mapLineVariant = (singleLine: boolean): string => {
  if (singleLine === true) {
    return styles.singleLine
  } else {
    return ""
  }
}
