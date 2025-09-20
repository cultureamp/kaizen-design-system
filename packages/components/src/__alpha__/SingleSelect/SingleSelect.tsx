import React from 'react'
import { Item as StatelyItem, Section } from '@react-stately/collections'
import { ComboBox, Select } from './subcomponents'
import {
  type ComboBoxProps,
  type SelectItem,
  type SelectProps,
  type SingleSelectProps,
} from './types'

export const SingleSelect = <T extends SelectItem>(props: SingleSelectProps<T>): JSX.Element => {
  const { isComboBox, children, ...rest } = props

  if (isComboBox) {
    return <ComboBox {...(rest as ComboBoxProps<T>)}>{children}</ComboBox>
  }

  return <Select {...(rest as SelectProps<T>)}>{children}</Select>
}

type CustomItemProps = {
  selectedIcon?: 'check' | 'radio'
  selectedPosition?: 'start' | 'end'
  key: string
  children?: React.ReactNode
  [key: string]: any
}

export const Item = React.forwardRef<HTMLElement, CustomItemProps>((props, ref) => {
  // @ts-expect-error: StatelyItem doesn't know about our internal item props
  return <StatelyItem {...props} ref={ref} />
})

// @ts-expect-error: doesn't know that the Item can have this static property
Item.getCollectionNode = StatelyItem.getCollectionNode
Item.displayName = 'SingleSelectItem'

SingleSelect.Item = Item
SingleSelect.Section = Section
