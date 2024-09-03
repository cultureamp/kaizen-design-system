import type { FieldMessageProps } from "../../src/FieldMessage"
import { migrateStringProp } from "../utils"

const OLD_PROP_NAME = "status"
const NEW_PROP_NAME = "variant"

const getNewVariantValue = (
  oldValue: Exclude<FieldMessageProps[typeof OLD_PROP_NAME], undefined>
): Exclude<FieldMessageProps[typeof NEW_PROP_NAME], undefined> => {
  switch (oldValue) {
    case "error":
      return "warning"
    case "caution":
      return "cautionary"
    case "success":
      return "success"
    case "default":
      return "default"
  }
}

export const transformFieldMessageStatusToVariant = migrateStringProp(
  OLD_PROP_NAME,
  NEW_PROP_NAME,
  getNewVariantValue
)
