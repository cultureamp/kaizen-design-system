import React from "react"
import {
  ComboBox as RACCombobox,
  ComboBoxProps as RACComboboxProps,
} from "react-aria-components"

export type ComboboxProps = {} & RACComboboxProps<HTMLElement>

export const Combobox = (props: ComboboxProps) => <RACCombobox {...props} />
