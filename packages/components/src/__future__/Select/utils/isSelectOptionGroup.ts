import { SelectItem, SelectOption, SelectOptionGroup } from '../types'

export const isSelectOptionGroup = <Option extends SelectOption>(
  item: SelectItem,
): item is SelectOptionGroup<Option> =>
  Object.prototype.hasOwnProperty.call(item, 'options') && Array.isArray(item.options)
