import { SelectItem, SelectOption } from "../types"
import { isSelectOptionGroup } from "./isSelectOptionGroup"

export const getDisabledKeysFromItems = <
  Option extends SelectOption = SelectOption,
>(
  items: Array<SelectItem<Option>>
): React.Key[] =>
  items.reduce((acc: React.Key[], item) => {
    if (isSelectOptionGroup(item)) {
      const keys = Array.from(item.options)
        .filter(groupItem => groupItem.disabled)
        .map(disabledItems => disabledItems.value)
      return [...acc, ...keys]
    }

    return item.disabled ? [...acc, item.value] : acc
  }, [])
