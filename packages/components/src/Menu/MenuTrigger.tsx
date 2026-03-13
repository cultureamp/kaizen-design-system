import React, { useCallback, useEffect, useRef } from 'react'
import {
  MenuTrigger as RACMenuTrigger,
  type MenuTriggerProps as RACMenuTriggerProps,
} from 'react-aria-components'

export type MenuTriggerProps = Omit<RACMenuTriggerProps, 'trigger'>

/**
 * A MenuTrigger adds open/close functionality when wrapping a Button and a Popover
 * (with a Menu inside of the MenuPopover).
 */
const DRAG_THRESHOLD_PX = 8

interface ActivePress {
  pointerId: number
  startX: number
  startY: number
}

export const MenuTrigger = ({ onOpenChange, ...props }: MenuTriggerProps): JSX.Element => {
  /**
   * Click-through bug fix
   *
   * When there is insufficient space below the trigger, React Aria flips the MenuPopover
   * above the trigger, overlapping it. The `pointerup` from the opening click can then
   * land on a MenuItem — and because React Aria's press handling fires `onAction` on
   * `pointerup` without requiring a matching `pointerdown` on that element, the item is
   * accidentally activated.
   *
   * To prevent this, we intercept the `pointerup` that opened the menu in the capture
   * phase before React Aria sees it:
   *  1. A document capture `pointerdown` listener records the in-flight press.
   *  2. When `onOpenChange(true)` fires during a press, a capture `pointerup` listener
   *     calls `stopImmediatePropagation()` on the matching event.
   *  3. If the pointer travels more than `DRAG_THRESHOLD_PX` before release, the block
   *     is cancelled so that press-drag-release interactions still work.
   *  4. All listeners are removed on normal completion, drag cancel, `pointercancel`,
   *     or component unmount.
   *  5. Keyboard and programmatic opens are unaffected — `activePress` is null in those
   *     cases so no block is ever attached.
   *
   * ## Known limitation
   *
   * If the user holds a mouse button down somewhere outside the trigger, then uses the
   * keyboard to open the menu (e.g. focuses the trigger and presses Enter/Space), and
   * then releases the mouse over a MenuItem without moving more than `DRAG_THRESHOLD_PX`,
   * the `pointerup` will be incorrectly blocked. This is an unlikely interaction and the
   * user can simply click again 👻.
   */
  const activePress = useRef<ActivePress | null>(null)
  const cancelOpenSequence = useRef<(() => void) | null>(null)

  useEffect(() => {
    const onPointerDown = (e: PointerEvent): void => {
      activePress.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY }
      // Clear activePress when the press ends without a menu open (normal click completed elsewhere).
      const clear = (up: PointerEvent): void => {
        if (up.pointerId === e.pointerId) activePress.current = null
      }
      // { once: true } makes these self-removing.
      document.addEventListener('pointerup', clear, { once: true })
      document.addEventListener('pointercancel', clear, { once: true })
    }
    document.addEventListener('pointerdown', onPointerDown, { capture: true })
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, { capture: true })
      cancelOpenSequence.current?.()
    }
  }, [])

  const handleOpenChange = useCallback(
    (isOpen: boolean): void => {
      // Only intercept when a pointer press is currently in-flight.
      // Keyboard and programmatic opens have activePress = null so are unaffected.
      if (isOpen && activePress.current !== null) {
        const { pointerId, startX, startY } = activePress.current

        // eslint-disable-next-line prefer-const
        let onPointerMove: (e: PointerEvent) => void

        const cleanup = (): void => {
          activePress.current = null
          document.removeEventListener('pointermove', onPointerMove)
          document.removeEventListener('pointercancel', cleanup)
          document.removeEventListener('pointerdown', cleanup)
          document.removeEventListener('pointerup', blockPointerUp, { capture: true })
          cancelOpenSequence.current = null
        }

        // Block the pointerup that opened the menu from reaching React Aria's handlers.
        const blockPointerUp = (e: PointerEvent): void => {
          if (e.pointerId === pointerId) {
            e.stopImmediatePropagation()
            cleanup()
          }
        }
        document.addEventListener('pointerup', blockPointerUp, { capture: true, once: true })

        // Cancel the block if the pointer moves beyond the drag threshold —
        // the user is doing a press-drag-release interaction and should not be blocked.
        onPointerMove = (e: PointerEvent): void => {
          if (e.pointerId !== pointerId) return
          const dx = e.clientX - startX
          const dy = e.clientY - startY
          if (dx * dx + dy * dy > DRAG_THRESHOLD_PX * DRAG_THRESHOLD_PX) {
            cleanup()
          }
        }
        document.addEventListener('pointermove', onPointerMove)
        // Also cancel if the pointer is forcibly ended (e.g. scroll takeover, touch interrupted).
        document.addEventListener('pointercancel', cleanup, { once: true })
        // Or if another pointer is pressed. This is another safe guard.
        document.addEventListener('pointerdown', cleanup, { once: true })

        // Store cleanup for this sequence — overwritten each open, called on unmount.
        cancelOpenSequence.current = () => {
          document.removeEventListener('pointerup', blockPointerUp, { capture: true })
          document.removeEventListener('pointermove', onPointerMove)
          document.removeEventListener('pointercancel', cleanup)
          activePress.current = null
        }
      }
      onOpenChange?.(isOpen)
    },
    [onOpenChange],
  )
  return <RACMenuTrigger onOpenChange={handleOpenChange} {...props} />
}
