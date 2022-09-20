import { Selection } from "@react-types/shared"
import React from "react"
import { ItemGroupType, ItemType } from "../../types"

export const getSelectedOptionKeys = (
  keys?: Selection,
  items?: ItemType[] | ItemGroupType[]
): React.Key[] => {
  if (!keys || !items) {
    return []
  }

  if (keys === "all") {
    return items.map(item => item.value)
  }

  return Array.from(keys)
}
