import { useMemo } from 'react'

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
