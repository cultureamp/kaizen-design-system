import React, { type PropsWithChildren } from 'react'
import { ListBoxItem as RACListBoxItem, type ListBoxItemProps } from 'react-aria-components'

export const ListItem = ({
  children,
  ...props
}: ListBoxItemProps<object> & PropsWithChildren): React.ReactElement => {
  return (
    <RACListBoxItem
      className="font-family-paragraph text-current"
      aria-label="Select an option"
      data-testid="single-select-list"
      {...props}
    >
      {children}
    </RACListBoxItem>
  )
}
ListItem.displayName = 'SingleSelect.ListItem'
