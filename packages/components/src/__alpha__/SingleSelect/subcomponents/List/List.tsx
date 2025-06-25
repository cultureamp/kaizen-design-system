import React, { type PropsWithChildren } from 'react'
import { ListBox as RACListBox, type ListBoxProps } from 'react-aria-components'

export const List = ({
  children,
  ...props
}: ListBoxProps<object> & PropsWithChildren): React.ReactElement => {
  return (
    <RACListBox
      className="flex flex-col gap-16"
      aria-label="Select an option"
      data-testid="single-select-list"
      {...props}
    >
      {children}
    </RACListBox>
  )
}
List.displayName = 'SingleSelect.List'
