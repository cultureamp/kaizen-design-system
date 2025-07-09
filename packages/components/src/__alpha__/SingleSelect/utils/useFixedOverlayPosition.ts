import { useCallback, useEffect, useLayoutEffect, useState, type RefObject } from 'react'

type Position = {
  top?: number
  bottom?: number
  insetInlineStart: number
  maxHeight?: number
}

type UseFixedOverlayPositionProps = {
  triggerRef: RefObject<HTMLElement>
  popoverRef: RefObject<HTMLElement>
  direction?: 'ltr' | 'rtl'
  offset?: number
  preferredPlacement?: 'top' | 'bottom'
}

/**
 * Returns logical position coordinates (top/bottom and insetInlineStart) for a popover
 * rendered in the CSS top-layer, with support for RTL, flipping, scrolling, and resizing.
 */
export function useFixedOverlayPosition({
  triggerRef,
  popoverRef,
  direction = 'ltr',
  offset = 4,
  preferredPlacement = 'bottom',
}: UseFixedOverlayPositionProps): Position {
  const [position, setPosition] = useState<Position>({
    top: undefined,
    bottom: undefined,
    insetInlineStart: 0,
    maxHeight: undefined,
  })

  const updatePosition = useCallback(() => {
    const trigger = triggerRef?.current
    const popover = popoverRef?.current
    if (!trigger || !popover) return

    const triggerRect = trigger.getBoundingClientRect?.()
    if (!triggerRect) return

    const triggerWindow = trigger.ownerDocument?.defaultView
    const popoverWindow = popover.ownerDocument?.defaultView
    if (!triggerWindow || !popoverWindow) return

    const isRTL = direction === 'rtl'
    let top: number | undefined
    let bottom: number | undefined
    let inlineStart: number = 0
    let maxHeight: number | undefined

    const scrollContainer = trigger.closest?.(
      '.sb-show-main, #storybook-root, [data-overlay-container]',
    ) as HTMLElement | null
    const scrollY = scrollContainer?.scrollTop ?? triggerWindow.scrollY ?? 0
    const scrollX = scrollContainer?.scrollLeft ?? triggerWindow.scrollX ?? 0

    // horizontal logic
    inlineStart = isRTL
      ? triggerWindow.innerWidth - triggerRect.right - scrollX
      : triggerRect.left + scrollX

    const triggerTop = triggerRect.top + scrollY
    const triggerBottom = triggerRect.bottom + scrollY
    const viewportHeight = popoverWindow.innerHeight ?? 0

    const spaceAbove = triggerTop
    const spaceBelow = viewportHeight - triggerBottom

    const flip = preferredPlacement === 'bottom' && spaceBelow < 200 && spaceAbove > spaceBelow

    if (flip) {
      // render above
      bottom = viewportHeight - triggerTop + offset
      top = undefined
      maxHeight = spaceAbove - offset
    } else {
      // render below
      top = triggerBottom + offset
      bottom = undefined
      maxHeight = spaceBelow - offset
    }

    setPosition({
      top: typeof top === 'number' ? top : undefined,
      bottom: typeof bottom === 'number' ? bottom : undefined,
      insetInlineStart: typeof inlineStart === 'number' ? inlineStart : 0,
      maxHeight: typeof maxHeight === 'number' ? maxHeight : undefined,
    })
  }, [triggerRef, popoverRef, direction, offset, preferredPlacement])

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [updatePosition])

  return position
}
