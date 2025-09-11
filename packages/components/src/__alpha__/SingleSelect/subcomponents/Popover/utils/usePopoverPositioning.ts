import { useCallback, useEffect, useRef, useState } from 'react'
import {
  type LogicalPosition,
  type Position,
  type UsePopoverPositioningProps,
} from '../../../types'

export function usePopoverPositioning({
  triggerRef,
  popoverRef,
  direction = 'ltr',
  offset = 4,
  preferredPlacement = 'bottom',
}: UsePopoverPositioningProps): Position & { isPositioned: boolean; updatePosition: () => void } {
  const [position, setPosition] = useState<Position>({
    top: preferredPlacement === 'bottom' ? offset : 'auto',
    bottom: preferredPlacement === 'top' ? offset : 'auto',
    insetInlineStart: 0,
    maxHeight: 300, // TODO: update this based on designs
  })

  const [isPositioned, setIsPositioned] = useState(true)

  const mountedRef = useRef<boolean>(false)
  const isSSR = typeof window === 'undefined'

  const updatePosition = useCallback(() => {
    if (isSSR) return

    const trigger = triggerRef.current
    const popover = popoverRef.current

    if (!mountedRef.current || !trigger || !popover?.isConnected) {
      return
    }

    const triggerRect = trigger.getBoundingClientRect()
    if (!triggerRect) return

    const doc = trigger.ownerDocument
    const win = doc?.defaultView ?? window
    const isRTL = direction === 'rtl'

    const inlineStart = isRTL ? win.innerWidth - triggerRect.right : triggerRect.left

    const triggerTop = triggerRect.top
    const triggerBottom = triggerRect.bottom
    const viewportHeight = win.innerHeight

    const spaceAbove = triggerTop
    const spaceBelow = viewportHeight - triggerBottom

    const shouldFlip =
      preferredPlacement === 'bottom' && spaceBelow < 200 && spaceAbove > spaceBelow

    let top: LogicalPosition
    let bottom: LogicalPosition
    let maxHeight: number | undefined

    if (shouldFlip) {
      top = 'auto'
      bottom = viewportHeight - triggerTop + offset
      maxHeight = Math.max(0, spaceAbove - offset)
    } else {
      top = triggerBottom + offset
      bottom = 'auto'
      maxHeight = Math.max(0, spaceBelow - offset)
    }

    const newPosition = {
      top,
      bottom,
      insetInlineStart: inlineStart,
      maxHeight,
    }

    setPosition(newPosition)
    setIsPositioned(true)
  }, [triggerRef, popoverRef, direction, offset, preferredPlacement, isSSR])

  useEffect(() => {
    if (typeof window === 'undefined') return

    mountedRef.current = true

    const triggerEl = triggerRef.current

    updatePosition()

    const resizeObserver = new ResizeObserver(() => {
      updatePosition()
    })

    if (triggerEl) resizeObserver.observe(triggerEl)

    const onWindowResize = (): void => updatePosition()
    window.addEventListener('resize', onWindowResize, { passive: true })

    return () => {
      mountedRef.current = false
      resizeObserver.disconnect()
      window.removeEventListener('resize', onWindowResize)
      setIsPositioned(false)
    }
  }, [updatePosition, triggerRef])

  return { ...position, isPositioned, updatePosition }
}
