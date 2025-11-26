import type React from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type Props = Record<string, string>

const DEFAULT_DEBOUNCE_MS = 1000

/**
 * Tailwind CSS default container query breakpoints in pixels
 * These match the default values from @tailwindcss/container-queries plugin
 */
const DEFAULT_BREAKPOINTS = {
  'xs': 320,
  'sm': 384,
  'md': 448,
  'lg': 512,
  'xl': 576,
  '2xl': 672,
  '3xl': 768,
  '4xl': 896,
  '5xl': 1024,
  '6xl': 1152,
  '7xl': 1280,
} as const

/**
 * Convert rem/px values to pixels for comparison
 */
const parseBreakpointValue = (value: string): number => {
  if (value.endsWith('rem')) {
    return parseFloat(value) * 16 // Assuming 1rem = 16px
  }
  if (value.endsWith('px')) {
    return parseFloat(value)
  }
  return parseFloat(value)
}

type ContainerQueries = {
  isXsOrLarger: boolean
  isSmOrLarger: boolean
  isMdOrLarger: boolean
  isLgOrLarger: boolean
  isXlOrLarger: boolean
  is2xlOrLarger: boolean
  is3xlOrLarger: boolean
  is4xlOrLarger: boolean
  is5xlOrLarger: boolean
  is6xlOrLarger: boolean
  is7xlOrLarger: boolean
  [key: string]: boolean
}

/**
 * A React hook for responding to container size changes using Tailwind CSS container query breakpoints.
 *
 * This hook uses ResizeObserver to detect when a container element crosses breakpoint thresholds,
 * enabling component-level responsive behavior independent of viewport size.
 *
 * @param propQueries - Optional custom container size queries in the format { queryName: 'minWidth' }
 *                      Example: { large: '600px', extraLarge: '48rem' }
 *
 * @returns An object containing:
 *   - containerRef: A ref to attach to your container element
 *   - queries: Boolean flags for each breakpoint (isXsOrLarger, isSmOrLarger, isMdOrLarger, etc.) and custom queries
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { containerRef, queries } = useContainerQueries()
 *
 *   return (
 *     <div ref={containerRef}>
 *       {queries.isSmOrLarger && <p>Small container</p>}
 *       {queries.isMdOrLarger && <p>Medium or larger container</p>}
 *     </div>
 *   )
 * }
 * ```
 *
 * @example With custom queries
 * ```tsx
 * const { containerRef, queries } = useContainerQueries({
 *   compact: '400px',
 *   spacious: '800px',
 * })
 *
 * return (
 *   <div ref={containerRef}>
 *     {queries.compact && <p>Compact view</p>}
 *     {queries.spacious && <p>Spacious view</p>}
 *   </div>
 * )
 * ```
 */
export const useContainerQueries = (
  propQueries: Props = {},
): {
  containerRef: React.RefCallback<HTMLElement>
  queries: ContainerQueries
} => {
  const isClient = typeof window !== 'undefined'

  // Parse custom queries
  const customQueriesPx = useMemo(
    () =>
      Object.entries(propQueries).reduce(
        (acc, [key, value]) => {
          acc[key] = parseBreakpointValue(value)
          return acc
        },
        {} as Record<string, number>,
      ),
    [propQueries],
  )

  // State to track container width
  const [containerWidth, setContainerWidth] = useState<number>(0)

  // ResizeObserver ref
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  // Debounced width update
  const debouncedSetContainerWidth = useDebouncedCallback((width: number) => {
    setContainerWidth(width)
  }, DEFAULT_DEBOUNCE_MS)

  // Callback ref for the container element
  const containerRef = useCallback(
    (node: HTMLElement | null) => {
      // Skip if SSR
      if (!isClient) return

      // Cleanup previous observer
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
        resizeObserverRef.current = null
      }

      if (node) {
        // Create new ResizeObserver
        resizeObserverRef.current = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // Use borderBoxSize for more accurate measurements
            const width = entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width
            debouncedSetContainerWidth(width)
          }
        })

        resizeObserverRef.current.observe(node)

        // Set initial width immediately (no debounce for initial render)
        const width = node.getBoundingClientRect().width
        setContainerWidth(width)
      }
    },
    [debouncedSetContainerWidth, isClient],
  )

  // Cleanup on unmount
  useEffect(
    () => () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    },
    [],
  )

  // Calculate breakpoint matches based on container width
  const breakpointMatches = useMemo(
    () => ({
      isXsOrLarger: containerWidth >= DEFAULT_BREAKPOINTS.xs,
      isSmOrLarger: containerWidth >= DEFAULT_BREAKPOINTS.sm,
      isMdOrLarger: containerWidth >= DEFAULT_BREAKPOINTS.md,
      isLgOrLarger: containerWidth >= DEFAULT_BREAKPOINTS.lg,
      isXlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS.xl,
      is2xlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS['2xl'],
      is3xlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS['3xl'],
      is4xlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS['4xl'],
      is5xlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS['5xl'],
      is6xlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS['6xl'],
      is7xlOrLarger: containerWidth >= DEFAULT_BREAKPOINTS['7xl'],
    }),
    [containerWidth],
  )

  // Calculate custom query matches
  const customMatches = useMemo(
    () =>
      Object.entries(customQueriesPx).reduce(
        (acc, [key, value]) => {
          acc[key] = containerWidth >= value
          return acc
        },
        {} as Record<string, boolean>,
      ),
    [containerWidth, customQueriesPx],
  )

  return {
    containerRef,
    queries: { ...breakpointMatches, ...customMatches },
  }
}
