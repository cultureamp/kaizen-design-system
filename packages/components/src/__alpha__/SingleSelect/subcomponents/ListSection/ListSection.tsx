import React, { type PropsWithChildren } from 'react'
import {
  Header as RACHeader,
  ListBoxSection as RACListBoxSection,
  type ListBoxSectionProps,
} from 'react-aria-components'

export const ListSection = ({
  name,
  children,
  ...props
}: ListBoxSectionProps<object> & PropsWithChildren & { name: string }): React.ReactElement => {
  return (
    <RACListBoxSection aria-label="Select an option" data-testid="single-select-list" {...props}>
      <RACHeader className="font-family-heading font-weight-paragraph-bold text-current">
        {name}
      </RACHeader>
      {children}
    </RACListBoxSection>
  )
}
ListSection.displayName = 'SingleSelect.ListSection'
