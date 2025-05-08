import React from 'react'
import { ListBox as RACListBox, type ListBoxProps } from 'react-aria-components'

export const ListBox = <T extends object>(props: ListBoxProps<T>): JSX.Element => {
  return <RACListBox className="bg-white rounded-md gap-6 shadow-lg">{props.children}</RACListBox>
}
