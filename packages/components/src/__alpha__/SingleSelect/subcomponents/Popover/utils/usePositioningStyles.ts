import { useEffect, useMemo, useState } from 'react'
import { useLocale } from '@react-aria/i18n'
import { supportsAnchorPositioning } from './supportsAnchorPositioning'
import { usePopoverPositioning } from './usePopoverPositioning'

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
} as const

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
  const { maxHeight } = positionData
  const styles: React.CSSProperties = {
    [CSS_PROPS.POSITION_ANCHOR]: anchorName,
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

export const usePositioningStyles = (
  buttonRef: React.RefObject<HTMLElement>,
  popoverRef: React.RefObject<HTMLDivElement>,
  anchorName: string,
): { popoverStyle: React.CSSProperties; isPositioned: boolean } => {
  // Cache anchor positioning support detection (SSR-safe)
  const cachedAnchorSupport: boolean | null = null
  const { direction } = useLocale()
  const [hasAnchorSupport, setHasAnchorSupport] = useState<boolean | null>(null)

  useEffect(() => {
    setHasAnchorSupport(supportsAnchorPositioning(cachedAnchorSupport))
  }, [])
  // Calculate position for RTL & iframe compatibility
  const { top, bottom, insetInlineStart, maxHeight, isPositioned } = usePopoverPositioning({
    triggerRef: buttonRef,
    popoverRef,
    direction,
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

  // Memoize styles to prevent unnecessary recalculations
  const popoverStyle = useMemo(() => {
    // Use manual positioning during detection or when not supported
    if (hasAnchorSupport === null || !hasAnchorSupport) {
      return getManualPositioningStyles(positionData)
    }

    // Use CSS anchor positioning when supported
    return getAnchorPositioningStyles(anchorName, positionData)
  }, [hasAnchorSupport, anchorName, positionData])

  return { popoverStyle, isPositioned }
}
