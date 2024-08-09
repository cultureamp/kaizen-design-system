import type { EmptyStateProps } from "~components/EmptyState"
import { migrateStringProp } from "../utils"

const OLD_PROP_NAME = "illustrationType"
const NEW_PROP_NAME = "variant"

const getNewVariantValue = (
  oldValue: Exclude<EmptyStateProps[typeof OLD_PROP_NAME], undefined>
): Exclude<EmptyStateProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case "informative":
      return "informative"
    case "positive":
      return "success"
    case "negative":
      return "warning"
    case "action":
      return "warning"
    case "neutral":
      return "expert-advice"
  }
}

export const transformEmptyStateIllustrationTypeToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue
)
