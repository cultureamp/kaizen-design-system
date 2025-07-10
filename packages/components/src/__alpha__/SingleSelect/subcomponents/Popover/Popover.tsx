import React, { useEffect, type PropsWithChildren } from 'react'
import { useOverlayPosition } from '@react-aria/overlays'
import { FocusScope as RACFocusScope } from 'react-aria'
import { Popover as RACPopover } from 'react-aria-components'
import { useSingleSelectContext } from '../../context'
import styles from './Popover.module.css'

type PopoverProps = {
  triggerRef: React.RefObject<HTMLElement>
  popoverRef: React.RefObject<HTMLDivElement>
  racPopoverRef: React.Ref<any>
}

export const Popover = ({
  triggerRef,
  popoverRef,
  racPopoverRef,
  children,
}: PopoverProps & PropsWithChildren): React.ReactElement => {
  const { isOpen, setOpen } = useSingleSelectContext()

  useEffect(() => {
    if (isOpen && !popoverRef?.current?.matches(':popover-open')) {
      popoverRef?.current?.showPopover()
    }
    if (!isOpen && popoverRef?.current?.matches(':popover-open')) {
      popoverRef.current.hidePopover()
    }
  }, [isOpen, popoverRef])

  const { overlayProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef: popoverRef,
    placement: 'bottom start',
    offset: 0,
    isOpen: isOpen,
    shouldFlip: true,
  })

  return (
    <RACPopover trigger="manual" isOpen={isOpen} onOpenChange={setOpen} ref={racPopoverRef}>
      <div
        // @ts-expect-error - popover attribute is not included in current ts version, ignore type error
        popover="manual"
        ref={popoverRef}
        style={{
          ...overlayProps,
          zIndex: 'none',
          margin: '0',
          boxSizing: 'border-box',
          width: triggerRef.current?.getBoundingClientRect().width ?? '200px',
        }}
        className={styles.popover}
      >
        <RACFocusScope>{children}</RACFocusScope>
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
