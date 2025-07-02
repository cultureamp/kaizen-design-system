import React, { useEffect, type PropsWithChildren } from 'react'
import { useOverlayPosition } from '@react-aria/overlays'
import { Popover as RACPopover } from 'react-aria-components'
import { useSingleSelectContext } from '../../context'
import styles from './Popover.module.css'

type PopoverProps = {
  buttonRef: React.RefObject<HTMLElement>
  popoverRef: React.RefObject<HTMLDivElement>
  racPopoverRef: React.Ref<any>
}

export const Popover = ({
  buttonRef,
  popoverRef,
  racPopoverRef,
  children,
}: PopoverProps & PropsWithChildren): React.ReactElement => {
  const { isOpen, setOpen } = useSingleSelectContext()

  useEffect(() => {
    const el = popoverRef.current
    if (!el?.showPopover || !el?.hidePopover) return
    if (isOpen) {
      el.showPopover()
    } else {
      el.hidePopover()
    }
  }, [isOpen, popoverRef])

  const { overlayProps } = useOverlayPosition({
    targetRef: buttonRef,
    overlayRef: popoverRef,
    placement: 'bottom start',
    offset: 0,
    isOpen: isOpen,
    shouldFlip: true,
  })
  return (
    <RACPopover trigger="manual" isOpen={isOpen} onOpenChange={setOpen} ref={racPopoverRef}>
      <div
        popover="manual"
        ref={popoverRef}
        style={{
          ...overlayProps,
          zIndex: 'none',
          margin: '0',
          boxSizing: 'border-box',
          width: buttonRef.current?.getBoundingClientRect().width ?? '200px',
        }}
        className={styles.popover}
      >
        {children}
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
