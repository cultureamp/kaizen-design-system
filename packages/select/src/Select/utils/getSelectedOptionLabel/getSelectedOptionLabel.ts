import { Key } from "react"
import { ItemType } from "../../types"

export const getSelectedOptionLabel = (
  selectedKey?: Key | null,
  items?: ItemType[]
): string | null => {
  if (!selectedKey || !items) {
    return null
  }

  return items.find(item => item.value === selectedKey)?.label ?? null
}
