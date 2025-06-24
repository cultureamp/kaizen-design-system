import React, { type PropsWithChildren } from 'react'
import {
  ListBoxSection as RACListBoxSection,
  type ListBoxSectionProps,
} from 'react-aria-components'

export const ListSection = ({
  children,
  ...props
}: ListBoxSectionProps<object> & PropsWithChildren): React.ReactElement => {
  return (
    <RACListBoxSection
      className="flex flex-col gap-1"
      aria-label="Select an option"
      data-testid="single-select-list"
      {...props}
    >
      {children}
    </RACListBoxSection>
  )
}
ListSection.displayName = 'SingleSelect.ListSection'
