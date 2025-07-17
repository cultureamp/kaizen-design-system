import React, { useLayoutEffect, type PropsWithChildren } from 'react'
import { useLocale } from '@react-aria/i18n'
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
  const { isOpen, setOpen, anchorName } = useSingleSelectContext()
  const { direction } = useLocale()
  // have to manually calculate the position here as RTL & iframes don't work with RAC useOverlay due to positioning in the css top-layer
  const { top, bottom, insetInlineStart, maxHeight, isPositioned } = useFixedOverlayPosition({
    triggerRef: buttonRef,
    popoverRef,
    direction,
    offset: 4,
    preferredPlacement: 'bottom',
  })

  useLayoutEffect(() => {
    const popover = popoverRef.current
    if (!popover?.showPopover || !popover?.hidePopover) return

    if (isOpen) {
      if (isPositioned) {
        popover.showPopover()
      }
    } else {
      popover.hidePopover()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isPositioned])

  return (
    <RACPopover trigger="manual" isOpen={isOpen} onOpenChange={setOpen} ref={racPopoverRef}>
      <div style={{ position: 'relative' }}>
        <div
          // @ts-expect-error - popover attribute is not included in current ts version, ignore type error
          popover="manual"
          ref={popoverRef}
          // TODO: expect some of these styles to change once we have designs
          className={styles.popover}
          style={{ '--position-anchor': anchorName } as React.CSSProperties}
          // style={{
          //   top,
          //   bottom,
          //   insetInlineStart,
          //   maxHeight,
          // }}
        >
          {children}
        </div>
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
