import React from 'react'
import { Item, Section } from '@react-stately/collections'
import { ComboBox, Select } from './subcomponents'
import { type ComboBoxProps, type SelectItem, type SelectProps } from './types'

export const SingleSelect = <T extends SelectItem>(
  props: (ComboBoxProps<T> & { isComboBox?: true }) | (SelectProps<T> & { isComboBox?: false }),
): JSX.Element => {
  const {
    isComboBox,
    children,
    labelPosition = 'top',
    variant = 'primary',
    size = 'medium',
    ...rest
  } = props

  if (isComboBox) {
    return (
      <ComboBox
        labelPosition={labelPosition}
        variant={variant}
        size={size}
        {...(rest as ComboBoxProps<T>)}
      >
        {children}
      </ComboBox>
    )
  }

  return (
    <Select
      labelPosition={labelPosition}
      variant={variant}
      size={size}
      {...(rest as SelectProps<T>)}
    >
      {children}
    </Select>
  )
}

SingleSelect.Item = Item
SingleSelect.Section = Section
