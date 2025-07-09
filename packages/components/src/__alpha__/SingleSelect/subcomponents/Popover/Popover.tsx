import React, { useEffect, type PropsWithChildren } from 'react'
import { useLocale } from '@react-aria/i18n'
import { FocusScope as RACFocusScope } from 'react-aria'
import { Popover as RACPopover } from 'react-aria-components'
import { useSingleSelectContext } from '../../context'
import { useFixedOverlayPosition } from '../../utils'
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
  const { direction } = useLocale()
  // have to manually calculate the position here as RTL & iframes don't work with RAC useOverlay due to positioning in the css top-layer
  const { top, bottom, insetInlineStart, maxHeight } = useFixedOverlayPosition({
    triggerRef: buttonRef,
    popoverRef,
    direction,
    offset: 4,
    preferredPlacement: 'bottom',
  })

  useEffect(() => {
    if (!popoverRef.current?.showPopover || !popoverRef.current?.hidePopover) return
    if (isOpen) {
      popoverRef.current.showPopover()
    } else {
      popoverRef.current.hidePopover()
    }
  }, [isOpen, popoverRef])

  return (
    <RACPopover trigger="manual" isOpen={isOpen} onOpenChange={setOpen} ref={racPopoverRef}>
      <div
        // @ts-expect-error - popover attribute is not included in current ts version, ignore type error
        popover="manual"
        ref={popoverRef}
        // TODO: expect some of these styles to change once we have designs
        className={styles.popover}
        style={{
          position: 'fixed',
          top,
          bottom,
          insetInlineStart,
          maxHeight,
          overflowY: 'auto',
          left: 'auto',
          right: 'auto',
          margin: '0',
          boxSizing: 'border-box',
          width: buttonRef.current?.getBoundingClientRect().width ?? '200px',
        }}
      >
        <RACFocusScope>{children}</RACFocusScope>
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
