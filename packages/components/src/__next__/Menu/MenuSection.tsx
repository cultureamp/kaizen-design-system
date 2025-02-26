import React, { forwardRef } from 'react'
import {
  MenuSection as RACMenuSection,
  type MenuSectionProps as RACMenuSectionProps,
} from 'react-aria-components'

export type MenuSectionProps = RACMenuSectionProps<HTMLDivElement>

/**
 * A <section> element used to separate <MenuItem>s
 */
export const MenuSection = forwardRef<HTMLDivElement, MenuSectionProps>(
  (props, ref): JSX.Element => <RACMenuSection ref={ref} {...props} />,
)
MenuSection.displayName = 'MenuSection'
