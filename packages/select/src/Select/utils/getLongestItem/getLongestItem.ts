import { ItemType } from "../../types"

export const getLongestItem = (items: ItemType[]): string => {
  const labels = [...items.map(item => item.label)]
  return labels.reduce((a, b) => (a.length > b.length ? a : b))
}
