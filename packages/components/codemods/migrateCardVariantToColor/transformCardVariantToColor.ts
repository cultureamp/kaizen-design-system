import type { CardProps } from "~components/Card"
import { migrateStringProp } from "../utils"

const OLD_PROP_NAME = "variant"
const NEW_PROP_NAME = "color"

const getNewVariantValue = (
  oldValue: Exclude<CardProps[typeof OLD_PROP_NAME], undefined>
): Exclude<CardProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case "assertive":
      return "orange"
    case "cautionary":
      return "yellow"
    case "default":
      return "white"
    case "destructive":
      return "red"
    case "highlight":
      return "purple"
    case "informative":
      return "blue"
    case "positive":
      return "green"
  }
}

export const transformCardVariantToColor = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue
)
