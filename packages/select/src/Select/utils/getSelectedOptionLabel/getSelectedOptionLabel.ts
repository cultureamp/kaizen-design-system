import { RootProps } from "../../components/Root"
import { ItemType } from "../../types"

export const getSelectedOptionLabel = (
  selectedKey?: RootProps["selectedKey"],
  items?: ItemType[]
): string | null => {
  if (!selectedKey || !items) {
    return null
  }

  return items.find(item => item.value === selectedKey)?.label ?? null
}
