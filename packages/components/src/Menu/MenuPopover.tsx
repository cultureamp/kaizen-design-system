import React, { forwardRef } from 'react'
import { Popover, type PopoverProps } from 'react-aria-components'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import styles from './MenuPopover.module.css'

export type MenuPopoverProps = PopoverProps

/**
 * Overlay element for holding a <Menu>
 */
export const MenuPopover = forwardRef<HTMLDivElement, MenuPopoverProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <Popover ref={ref} className={mergeClassNames(styles.menuPopover, className)} {...props} />
  ),
)
MenuPopover.displayName = 'MenuPopover'
