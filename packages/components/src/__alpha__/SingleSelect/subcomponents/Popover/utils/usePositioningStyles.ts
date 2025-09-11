import { useMemo } from 'react'
import { useLocale } from '@react-aria/i18n'
import { type PositionData } from '../../../types'
import { usePopoverPositioning } from './usePopoverPositioning'
import { useSupportsAnchorPositioning } from './useSupportsAnchorPositioning'

const CSS_PROPS = {
  POSITION_ANCHOR: '--position-anchor',
  POSITION_AREA: '--position-area',
} as const

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
): { popoverStyle: React.CSSProperties; isPositioned: boolean; updatePosition: () => void } => {
  const { direction } = useLocale()
  const hasAnchorSupport = useSupportsAnchorPositioning()

  const { top, bottom, insetInlineStart, maxHeight, isPositioned, updatePosition } =
    usePopoverPositioning({
      triggerRef: buttonRef,
      popoverRef,
      direction,
      preferredPlacement: 'bottom',
    })

  const positionData = useMemo(
    () => ({
      top,
      bottom,
      insetInlineStart,
      maxHeight,
    }),
    [top, bottom, insetInlineStart, maxHeight],
  )

  const popoverStyle = useMemo(() => {
    if (hasAnchorSupport === null || !hasAnchorSupport) {
      return getManualPositioningStyles(positionData)
    }

    return getAnchorPositioningStyles(anchorName, positionData)
  }, [hasAnchorSupport, anchorName, positionData])

  return { popoverStyle, isPositioned, updatePosition }
}
