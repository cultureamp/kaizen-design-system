import { Key, Selection } from "@react-types/shared"
import { ItemType } from "../types"

export const getSelectedOptionKeys = (
  keys?: Selection,
  items?: ItemType[]
): Key[] => {
  if (!keys || !items) {
    return []
  }

  if (keys === "all") {
    return items.map(item => item.value)
  }

  return Array.from(keys)
}
