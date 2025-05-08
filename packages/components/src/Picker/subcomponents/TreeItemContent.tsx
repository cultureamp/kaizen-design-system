import React from 'react'
import {
  TreeItemContent as RACTreeItemContent,
  type TreeItemContentProps as RACTreeItemContentProps,
} from 'react-aria-components'

export const TreeItemContent = ({ children, ...props }: RACTreeItemContentProps): JSX.Element => {
  return <RACTreeItemContent {...props}>{children}</RACTreeItemContent>
}
