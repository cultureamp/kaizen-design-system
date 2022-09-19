import { Selection } from "@react-types/shared"
import { ItemType } from "../../types"

export const getSelectedOptionLabels = (
  keys?: Selection,
  items?: ItemType[]
): string[] => {
  if (!keys || !items) {
    return []
  }

  const flattenedItems = items
    .map(item => (item.children ? item.children : item))
    .flat()

  if (keys === "all") {
    return flattenedItems.map(item => item.label)
  }

  return Array.from(keys)
    .map(key => flattenedItems.find(item => item.value === key)?.label ?? "")
    .filter(item => item !== "")
}
