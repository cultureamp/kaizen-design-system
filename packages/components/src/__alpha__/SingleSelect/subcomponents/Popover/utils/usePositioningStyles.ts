import { useMemo } from 'react'
import { useLocale } from '@react-aria/i18n'
import { type PositionData } from '~components/__alpha__/SingleSelect/types'
import { usePopoverPositioning } from './usePopoverPositioning'
import { useSupportsAnchorPositioning } from './useSupportsAnchorPositioning'

// CSS custom property names for consistent usage
const CSS_PROPS = {
  POSITION_ANCHOR: '--position-anchor',
  POSITION_AREA: '--position-area',
} as const

// Default values
const DEFAULTS = {
  MAX_HEIGHT: '300px',
} as const

/**
 * Generates manual positioning styles for browsers without anchor positioning support or SSR
 */
const getManualPositioningStyles = (positionData: PositionData): React.CSSProperties => ({
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
  positionData: PositionData,
): React.CSSProperties => {
  const styles: React.CSSProperties = {
    maxHeight: positionData.maxHeight ?? DEFAULTS.MAX_HEIGHT,
    [CSS_PROPS.POSITION_ANCHOR]: anchorName,
    [CSS_PROPS.POSITION_AREA]: positionData.top === 'auto' ? 'top' : 'bottom',
  }
  return styles
}

export const usePositioningStyles = (
  buttonRef: React.RefObject<HTMLElement>,
  popoverRef: React.RefObject<HTMLDivElement>,
  anchorName: string,
): { popoverStyle: React.CSSProperties; isPositioned: boolean } => {
  const { direction } = useLocale()
  const hasAnchorSupport = useSupportsAnchorPositioning()
  // const hasAnchorSupport = false

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
