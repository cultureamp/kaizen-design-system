import React, { useEffect, useLayoutEffect, useState, type PropsWithChildren } from 'react'
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

/**
 * Detects if CSS anchor positioning is supported by the browser
 */
const supportsAnchorPositioning = (): boolean => {
  if (typeof window === 'undefined' || typeof CSS === 'undefined') {
    return false
  }

  try {
    return CSS.supports('position-anchor', 'auto') || CSS.supports('position-anchor: auto')
  } catch {
    return false
  }
}

/**
 * Hook to determine anchor positioning support and return appropriate styles
 */
const usePopoverPositioning = (
  anchorName: string,
  positionData: {
    top: number | string | undefined
    bottom: number | string | undefined
    insetInlineStart: number | string | undefined
    maxHeight: number | string | undefined
  },
): { getPopoverStyle: () => React.CSSProperties } => {
  const [hasAnchorSupport, setHasAnchorSupport] = useState<boolean | null>(null)

  useEffect(() => {
    setHasAnchorSupport(supportsAnchorPositioning())
  }, [])

  const getPopoverStyle = (): React.CSSProperties => {
    const { top, bottom, insetInlineStart, maxHeight } = positionData

    // During detection or when anchor positioning is not supported, use manual positioning
    if (hasAnchorSupport === null || !hasAnchorSupport) {
      return {
        top,
        bottom,
        insetInlineStart,
        maxHeight,
      }
    }

    // Use CSS anchor positioning when supported
    return { '--position-anchor': anchorName } as React.CSSProperties
  }

  return { getPopoverStyle }
}

export const Popover = ({
  buttonRef,
  popoverRef,
  racPopoverRef,
  children,
}: PopoverProps & PropsWithChildren): React.ReactElement => {
  const { isOpen, setOpen, anchorName } = useSingleSelectContext()
  const { direction } = useLocale()

  // Manual position calculation for RTL & iframe compatibility
  // RAC useOverlay doesn't work properly with positioning in the CSS top-layer
  const { top, bottom, insetInlineStart, maxHeight, isPositioned } = useFixedOverlayPosition({
    triggerRef: buttonRef,
    popoverRef,
    direction,
    offset: 4,
    preferredPlacement: 'bottom',
  })

  const { getPopoverStyle } = usePopoverPositioning(anchorName, {
    top,
    bottom,
    insetInlineStart,
    maxHeight,
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
          className={styles.popover}
          style={getPopoverStyle()}
        >
          {children}
        </div>
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
