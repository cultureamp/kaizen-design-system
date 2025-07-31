import React, { useLayoutEffect, useMemo, type PropsWithChildren } from 'react'

import { Popover as RACPopover } from 'react-aria-components'
import { useSingleSelectContext } from '../../context'
import { type PopoverProps } from '../../types'
import { usePositioningStyles } from './utils/usePositioningStyles'
import styles from './Popover.module.css'

export const Popover = ({
  buttonRef,
  popoverRef,
  racPopoverRef,
  children,
}: PopoverProps & PropsWithChildren): React.ReactElement => {
  const { isOpen, setOpen, anchorName } = useSingleSelectContext()

  const { popoverStyle, isPositioned } = usePositioningStyles(buttonRef, popoverRef, anchorName)

  const shouldShowPopover = useMemo(() => isOpen && isPositioned, [isOpen, isPositioned])

  useLayoutEffect(() => {
    const popover = popoverRef.current
    if (!popover?.showPopover || !popover?.hidePopover) return

    if (shouldShowPopover) {
      popover.showPopover()
    } else {
      popover.hidePopover()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldShowPopover])

  return (
    <RACPopover trigger="manual" isOpen={isOpen} onOpenChange={setOpen} ref={racPopoverRef}>
      <div
        // @ts-expect-error - popover attribute is not included in current ts version, ignore type error
        popover="manual"
        ref={popoverRef}
        className={styles.popover}
        style={popoverStyle}
      >
        {children}
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
