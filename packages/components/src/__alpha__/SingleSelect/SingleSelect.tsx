import React from 'react'
import { ComboBox, Select } from './subcomponents'
import { type ComboBoxProps, type SelectProps } from './types'

export function SingleSelect<T extends { key: string | number; label: React.ReactNode }>(
  props: (ComboBoxProps<T> & { isComboBox?: true }) | (SelectProps<T> & { isComboBox?: false }),
): JSX.Element {
  const { isComboBox, children, ...rest } = props

  if (isComboBox) {
    const { ...comboRest } = rest as ComboBoxProps<T>
    return <ComboBox {...comboRest}>{children}</ComboBox>
  }

  const { ...selectRest } = rest as SelectProps<T>
  return <Select {...selectRest}>{children}</Select>
}
