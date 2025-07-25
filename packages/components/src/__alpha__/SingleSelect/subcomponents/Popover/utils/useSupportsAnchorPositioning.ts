import { useMemo } from 'react'
/**
 * Detects if CSS anchor positioning is supported by the browser (cached, SSR-safe)
 */
export const useSupportsAnchorPositioning = (): boolean => {
  return useMemo(() => {
    if (typeof window === 'undefined' || typeof CSS === 'undefined') {
      return false
    }

    return (
      CSS.supports('position-anchor', 'auto') || CSS.supports('position-try-fallbacks: flip-block')
    )
  }, [])
}
