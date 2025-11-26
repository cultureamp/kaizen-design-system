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

export const useContainerQueries = (
  propQueries: Props = {},
): {
  containerRef: React.RefCallback<HTMLElement>
  queries: ContainerQueries
} => {
  const isClient = typeof window !== 'undefined'

  const [containerWidth, setContainerWidth] = useState<number>(0)

  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  const debouncedSetContainerWidth = useDebouncedCallback((width: number) => {
    setContainerWidth(width)
  }, DEFAULT_DEBOUNCE_MS)

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

  useEffect(
    () => () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    },
    [],
  )

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
