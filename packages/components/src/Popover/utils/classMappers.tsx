import React from "react"
import {
  CautionIcon,
  ExclamationIcon,
  InformationIcon,
  SuccessIcon,
} from "~components/Icon"
import styles from "../Popover.module.scss"
import { Variant, Size } from "../types"

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

export const mapVariantToIconClass = (variant: Variant): string | undefined => {
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

export const mapVariantToIcon = (variant: Variant): JSX.Element => {
  switch (variant) {
    case "informative":
      return <InformationIcon role="presentation" />
    case "positive":
      return <SuccessIcon role="presentation" />
    case "negative":
      return <ExclamationIcon role="presentation" />
    case "cautionary":
      return <CautionIcon role="presentation" />
    default:
      return <InformationIcon role="presentation" />
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

export const mapLineVariant = (singleLine: boolean): string =>
  singleLine ? styles.singleLine : ""
