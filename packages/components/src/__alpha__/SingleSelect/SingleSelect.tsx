import React from 'react'
import { Item, Section } from '@react-stately/collections'
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

SingleSelect.Item = Item
SingleSelect.Section = Section
