import React, { forwardRef } from 'react'
import { Popover, type PopoverProps } from 'react-aria-components'

export type DialogMenuPopoverProps = PopoverProps

/**
 * Overlay element for holding a <DialogMenu> within a Dialog context
 */
export const DialogMenuPopover = forwardRef<HTMLDivElement, DialogMenuPopoverProps>(
  (props, ref): JSX.Element => <Popover ref={ref} {...props} />,
)
DialogMenuPopover.displayName = 'DialogMenuPopover'
