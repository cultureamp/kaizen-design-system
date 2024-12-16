import React, { forwardRef } from 'react'
import { Popover, PopoverProps } from 'react-aria-components'

export type MenuPopoverProps = PopoverProps

/**
 * Overlay element for holding a <Menu>
 */
export const MenuPopover = forwardRef<HTMLDivElement, MenuPopoverProps>(
  (props, ref): JSX.Element => <Popover ref={ref} {...props} />,
)
MenuPopover.displayName = 'MenuPopover'
