import { SelectItem, SelectOption, SelectOptionGroup } from "../types"

export const isSelectOptionGroup = <Option extends SelectOption>(
  item: SelectItem
): item is SelectOptionGroup<Option> =>
  item.hasOwnProperty("options") && Array.isArray(item.options)
