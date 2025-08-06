import {
  type SingleSelectItem,
  type SingleSelectOption,
  type SingleSelectOptionGroup,
} from '../types'

export const isSelectOptionGroup = <Option extends SingleSelectOption>(
  item: SingleSelectItem,
): item is SingleSelectOptionGroup<Option> =>
  Object.prototype.hasOwnProperty.call(item, 'options') && Array.isArray(item.options)
