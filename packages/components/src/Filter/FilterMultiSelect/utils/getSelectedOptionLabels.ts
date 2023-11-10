import { Selection } from "@react-types/shared"
import { ItemType } from "../types"

export const getSelectedOptionLabels = (
  keys?: Selection,
  items?: ItemType[]
): string[] => {
  if (!keys || !items) {
    return []
  }

  if (keys === "all") {
    return items.map(item => item.label)
  }

  return Array.from(keys)
    .map(key => items.find(item => item.value === key)?.label ?? "")
    .filter(item => item !== "")
}
