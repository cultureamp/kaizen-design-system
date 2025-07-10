import { useCallback, useEffect, useLayoutEffect, useState, type RefObject } from 'react'

type LogicalPosition = number | 'auto' | undefined

type Position = {
  top: LogicalPosition
  bottom: LogicalPosition
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
 * Get the nearest scrollable ancestor of an element.
 */
function getScrollParent(node: HTMLElement | null): HTMLElement | Window {
  if (!node) return window
  const regex = /(auto|scroll|overlay)/
  const getStyle = (el: HTMLElement): CSSStyleDeclaration => getComputedStyle(el)

  let parent: HTMLElement | null = node

  while (parent && parent !== document.body) {
    const { overflow, overflowY, overflowX } = getStyle(parent)
    if (regex.test(overflow + overflowY + overflowX)) {
      return parent
    }
    parent = parent.parentElement
  }

  return window
}

/**
 * Hook to calculate and update the position of an overlay rendered in the top layer.
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
    const trigger = triggerRef.current
    const popover = popoverRef.current
    if (!trigger || !popover) return

    const triggerRect = trigger.getBoundingClientRect()
    if (!triggerRect) return

    const doc = trigger.ownerDocument
    const win = doc?.defaultView ?? window
    const isRTL = direction === 'rtl'

    const scrollContainer = getScrollParent(trigger)
    const scrollY = scrollContainer instanceof HTMLElement ? scrollContainer.scrollTop : win.scrollY
    const scrollX =
      scrollContainer instanceof HTMLElement ? scrollContainer.scrollLeft : win.scrollX

    const inlineStart = isRTL
      ? win.innerWidth - triggerRect.right - scrollX
      : triggerRect.left + scrollX

    const triggerTop = triggerRect.top + scrollY
    const triggerBottom = triggerRect.bottom + scrollY
    const viewportHeight = win.innerHeight

    const spaceAbove = triggerTop
    const spaceBelow = viewportHeight - triggerBottom

    const shouldFlip =
      preferredPlacement === 'bottom' && spaceBelow < 200 && spaceAbove > spaceBelow

    let top: LogicalPosition
    let bottom: LogicalPosition
    let maxHeight: number | undefined

    if (shouldFlip) {
      // Render above
      top = 'auto'
      bottom = viewportHeight - triggerTop + offset
      maxHeight = Math.max(0, spaceAbove - offset)
    } else {
      // Render below
      top = triggerBottom + offset
      bottom = 'auto'
      maxHeight = Math.max(0, spaceBelow - offset)
    }

    setPosition({
      top,
      bottom,
      insetInlineStart: inlineStart,
      maxHeight,
    })
  }, [triggerRef, popoverRef, direction, offset, preferredPlacement])

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    let frame: number | null = null

    const onScrollOrResize = (): void => {
      frame ??= requestAnimationFrame(() => {
        updatePosition()
        frame = null
      })
    }

    updatePosition()
    window.addEventListener('resize', onScrollOrResize)
    window.addEventListener('scroll', onScrollOrResize, true)

    return () => {
      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
      window.removeEventListener('resize', onScrollOrResize)
      window.removeEventListener('scroll', onScrollOrResize, true)
    }
  }, [updatePosition])

  return position
}
