import React, { useEffect, useLayoutEffect, useMemo, useState, type PropsWithChildren } from 'react'
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

// CSS custom property names for consistent usage
const CSS_PROPS = {
  POSITION_ANCHOR: '--position-anchor',
  POPOVER_TOP: '--popover-top',
  POPOVER_BOTTOM: '--popover-bottom',
  POPOVER_INLINE_START: '--popover-inline-start',
  POPOVER_MAX_HEIGHT: '--popover-max-height',
} as const

// Default values
const DEFAULTS = {
  MAX_HEIGHT: '300px',
  OFFSET: '4px',
} as const

// Cache anchor positioning support detection (SSR-safe)
let cachedAnchorSupport: boolean | null = null

/**
 * Detects if CSS anchor positioning is supported by the browser (cached, SSR-safe)
 */
const supportsAnchorPositioning = (): boolean => {
  if (cachedAnchorSupport !== null) return cachedAnchorSupport

  if (typeof window === 'undefined' || typeof CSS === 'undefined') {
    cachedAnchorSupport = false
    return false
  }

  try {
    cachedAnchorSupport =
      CSS.supports('position-anchor', 'auto') || CSS.supports('position-anchor: auto')
    return cachedAnchorSupport
  } catch {
    cachedAnchorSupport = false
    return false
  }
}

/**
 * Generates manual positioning styles for browsers without anchor positioning support or SSR
 */
const getManualPositioningStyles = (positionData: {
  top: number | string | undefined
  bottom: number | string | undefined
  insetInlineStart: number | string | undefined
  maxHeight: number | string | undefined
}): React.CSSProperties => ({
  top: positionData.top,
  bottom: positionData.bottom,
  insetInlineStart: positionData.insetInlineStart,
  maxHeight: positionData.maxHeight,
  left: 'auto',
  right: 'auto',
  position: 'fixed',
})

/**
 * Generates anchor positioning styles with CSS custom properties
 */
const getAnchorPositioningStyles = (
  anchorName: string,
  positionData: {
    top: number | string | undefined
    bottom: number | string | undefined
    insetInlineStart: number | string | undefined
    maxHeight: number | string | undefined
  },
): React.CSSProperties => {
  const { top, bottom, insetInlineStart, maxHeight } = positionData
  const styles: React.CSSProperties = {
    [CSS_PROPS.POSITION_ANCHOR]: anchorName,
  }

  // Vertical positioning
  if (typeof top === 'number' && bottom === 'auto') {
    // Position below trigger
    styles[CSS_PROPS.POPOVER_TOP] = `calc(anchor(bottom) + ${DEFAULTS.OFFSET})`
    styles[CSS_PROPS.POPOVER_BOTTOM] = 'auto'
  } else if (typeof bottom === 'number' && top === 'auto') {
    // Position above trigger
    styles[CSS_PROPS.POPOVER_TOP] = 'auto'
    styles[CSS_PROPS.POPOVER_BOTTOM] = `calc(anchor(top) + ${DEFAULTS.OFFSET})`
  } else {
    // Default: position below
    styles[CSS_PROPS.POPOVER_TOP] = `calc(anchor(bottom) + ${DEFAULTS.OFFSET})`
    styles[CSS_PROPS.POPOVER_BOTTOM] = 'auto'
  }

  // Horizontal positioning
  if (typeof insetInlineStart === 'number') {
    styles[CSS_PROPS.POPOVER_INLINE_START] = `${insetInlineStart}px`
  } else {
    styles[CSS_PROPS.POPOVER_INLINE_START] = 'anchor(start)'
  }

  // Max height
  if (typeof maxHeight === 'number') {
    styles[CSS_PROPS.POPOVER_MAX_HEIGHT] = `${maxHeight}px`
  } else if (maxHeight) {
    styles[CSS_PROPS.POPOVER_MAX_HEIGHT] = maxHeight
  } else {
    styles[CSS_PROPS.POPOVER_MAX_HEIGHT] = DEFAULTS.MAX_HEIGHT
  }

  return styles
}

/**
 * Hook to determine anchor positioning support and return appropriate styles (memoized)
 */
const usePopoverPositioning = (
  anchorName: string,
  positionData: {
    top: number | string | undefined
    bottom: number | string | undefined
    insetInlineStart: number | string | undefined
    maxHeight: number | string | undefined
  },
): { getPopoverStyle: React.CSSProperties } => {
  const [hasAnchorSupport, setHasAnchorSupport] = useState<boolean | null>(null)

  useEffect(() => {
    setHasAnchorSupport(supportsAnchorPositioning())
  }, [])

  // Memoize styles to prevent unnecessary recalculations
  const getPopoverStyle = useMemo(() => {
    // Use manual positioning during detection or when not supported
    if (hasAnchorSupport === null || !hasAnchorSupport) {
      return getManualPositioningStyles(positionData)
    }

    // Use CSS anchor positioning when supported
    return getAnchorPositioningStyles(anchorName, positionData)
  }, [hasAnchorSupport, anchorName, positionData])

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

  // Calculate position for RTL & iframe compatibility
  const { top, bottom, insetInlineStart, maxHeight, isPositioned } = useFixedOverlayPosition({
    triggerRef: buttonRef,
    popoverRef,
    direction,
    offset: 4,
    preferredPlacement: 'bottom',
  })

  // Memoize position data to prevent unnecessary style recalculations
  const positionData = useMemo(
    () => ({
      top,
      bottom,
      insetInlineStart,
      maxHeight,
    }),
    [top, bottom, insetInlineStart, maxHeight],
  )

  // Generate appropriate styles based on browser support
  const { getPopoverStyle } = usePopoverPositioning(anchorName, positionData)

  // Show/hide popover based on state (memoized for performance, SSR-safe)
  const shouldShowPopover = useMemo(() => isOpen && isPositioned, [isOpen, isPositioned])

  useLayoutEffect(() => {
    const popover = popoverRef.current

    // Check if popover API is available (browser-only)
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
      <div style={{ position: 'relative' }}>
        <div
          // @ts-expect-error - popover attribute is not included in current ts version, ignore type error
          popover="manual"
          ref={popoverRef}
          className={styles.popover}
          style={getPopoverStyle}
        >
          {children}
        </div>
      </div>
    </RACPopover>
  )
}

Popover.displayName = 'SingleSelect.Popover'
