import React from 'react'
import { ListBox as RACListBox, ListBoxProps as RACListBoxProps } from 'react-aria-components'
import styles from './Listbox.module.css'

export type ListboxProps = RACListBoxProps<HTMLElement>

export const Listbox = (props: ListboxProps): JSX.Element => (
  <RACListBox className={styles.listbox} {...props} />
)
