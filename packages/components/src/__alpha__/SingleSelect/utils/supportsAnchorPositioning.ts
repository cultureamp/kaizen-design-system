/**
 * Detects if CSS anchor positioning is supported by the browser (cached, SSR-safe)
 */
export const supportsAnchorPositioning = (cachedAnchorSupport: boolean | null): boolean => {
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
