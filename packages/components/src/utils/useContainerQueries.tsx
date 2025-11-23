/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type Props = Record<string, string>
type GenericChildrenType = { children?: ReactNode }

const DEFAULT_DEBOUNCE_MS = 500

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

type HelperComponentProps = {
  children?: ReactNode
}

type ContainerQueries = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  is2xl: boolean
  is3xl: boolean
  is4xl: boolean
  is5xl: boolean
  is6xl: boolean
  is7xl: boolean
  [key: string]: boolean
}

type ContainerComponents = {
  'XsOnly': (props: GenericChildrenType) => JSX.Element
  'SmOnly': (props: GenericChildrenType) => JSX.Element
  'MdOnly': (props: GenericChildrenType) => JSX.Element
  'LgOnly': (props: GenericChildrenType) => JSX.Element
  'XlOnly': (props: GenericChildrenType) => JSX.Element
  '2xlOnly': (props: GenericChildrenType) => JSX.Element
  '3xlOnly': (props: GenericChildrenType) => JSX.Element
  '4xlOnly': (props: GenericChildrenType) => JSX.Element
  '5xlOnly': (props: GenericChildrenType) => JSX.Element
  '6xlOnly': (props: GenericChildrenType) => JSX.Element
  '7xlOnly': (props: GenericChildrenType) => JSX.Element
  'XsOrLarger': (props: GenericChildrenType) => JSX.Element
  'SmOrLarger': (props: GenericChildrenType) => JSX.Element
  'MdOrLarger': (props: GenericChildrenType) => JSX.Element
  'LgOrLarger': (props: GenericChildrenType) => JSX.Element
  'XlOrLarger': (props: GenericChildrenType) => JSX.Element
  [key: string]: (props: GenericChildrenType) => JSX.Element
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
 *   - queries: Boolean flags for each breakpoint (isXs, isSm, isMd, etc.) and custom queries
 *   - components: React components for conditional rendering (XsOnly, SmOrLarger, etc.)
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { containerRef, queries, components } = useContainerQueries()
 *   const { MdOrLarger } = components
 *
 *   return (
 *     <div ref={containerRef}>
 *       {queries.isSm && <p>Small container</p>}
 *       <MdOrLarger>
 *         <p>Medium or larger container</p>
 *       </MdOrLarger>
 *     </div>
 *   )
 * }
 * ```
 *
 * @example With custom queries
 * ```tsx
 * const { containerRef, queries, components } = useContainerQueries({
 *   compact: '400px',
 *   spacious: '800px',
 * })
 * const { Compact, Spacious } = components
 *
 * return (
 *   <div ref={containerRef}>
 *     <Compact><p>Compact view</p></Compact>
 *     <Spacious><p>Spacious view</p></Spacious>
 *   </div>
 * )
 * ```
 */
export const useContainerQueries = (
  propQueries: Props = {},
): {
  containerRef: React.RefCallback<HTMLElement>
  queries: ContainerQueries
  components: ContainerComponents
} => {
  // SSR support - return safe defaults when window is undefined
  if (typeof window === 'undefined') {
    return {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      containerRef: () => {},
      queries: {
        isXs: false,
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
        is2xl: false,
        is3xl: false,
        is4xl: false,
        is5xl: false,
        is6xl: false,
        is7xl: true, // Default to largest for SSR
      },
      components: {
        'XsOnly': () => <></>,
        'SmOnly': () => <></>,
        'MdOnly': () => <></>,
        'LgOnly': () => <></>,
        'XlOnly': () => <></>,
        '2xlOnly': () => <></>,
        '3xlOnly': () => <></>,
        '4xlOnly': () => <></>,
        '5xlOnly': () => <></>,
        '6xlOnly': () => <></>,
        '7xlOnly': (props: HelperComponentProps) => <>{props.children}</>,
        'XsOrLarger': (props: HelperComponentProps) => <>{props.children}</>,
        'SmOrLarger': (props: HelperComponentProps) => <>{props.children}</>,
        'MdOrLarger': (props: HelperComponentProps) => <>{props.children}</>,
        'LgOrLarger': (props: HelperComponentProps) => <>{props.children}</>,
        'XlOrLarger': (props: HelperComponentProps) => <>{props.children}</>,
      },
    }
  }

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
    [debouncedSetContainerWidth],
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
      isXs: containerWidth >= DEFAULT_BREAKPOINTS.xs,
      isSm: containerWidth >= DEFAULT_BREAKPOINTS.sm,
      isMd: containerWidth >= DEFAULT_BREAKPOINTS.md,
      isLg: containerWidth >= DEFAULT_BREAKPOINTS.lg,
      isXl: containerWidth >= DEFAULT_BREAKPOINTS.xl,
      is2xl: containerWidth >= DEFAULT_BREAKPOINTS['2xl'],
      is3xl: containerWidth >= DEFAULT_BREAKPOINTS['3xl'],
      is4xl: containerWidth >= DEFAULT_BREAKPOINTS['4xl'],
      is5xl: containerWidth >= DEFAULT_BREAKPOINTS['5xl'],
      is6xl: containerWidth >= DEFAULT_BREAKPOINTS['6xl'],
      is7xl: containerWidth >= DEFAULT_BREAKPOINTS['7xl'],
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

  // Helper function to check if container is at exact breakpoint (not larger)
  const isExactBreakpoint = useCallback(
    (breakpoint: keyof typeof DEFAULT_BREAKPOINTS): boolean => {
      const sortedBreakpoints = Object.entries(DEFAULT_BREAKPOINTS).sort(([, a], [, b]) => a - b)
      const currentIndex = sortedBreakpoints.findIndex(([key]) => key === breakpoint)
      const nextBreakpoint = sortedBreakpoints[currentIndex + 1]

      const minWidth = DEFAULT_BREAKPOINTS[breakpoint]
      const maxWidth = nextBreakpoint ? nextBreakpoint[1] : Infinity

      return containerWidth >= minWidth && containerWidth < maxWidth
    },
    [containerWidth],
  )

  // Create helper components for Tailwind breakpoints
  const components = useMemo(
    () => ({
      'XsOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('xs') && props.children}</>,
      'SmOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('sm') && props.children}</>,
      'MdOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('md') && props.children}</>,
      'LgOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('lg') && props.children}</>,
      'XlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('xl') && props.children}</>,
      '2xlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('2xl') && props.children}</>,
      '3xlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('3xl') && props.children}</>,
      '4xlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('4xl') && props.children}</>,
      '5xlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('5xl') && props.children}</>,
      '6xlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('6xl') && props.children}</>,
      '7xlOnly': (props: HelperComponentProps) => <>{isExactBreakpoint('7xl') && props.children}</>,
      'XsOrLarger': (props: HelperComponentProps) => (
        <>{breakpointMatches.isXs && props.children}</>
      ),
      'SmOrLarger': (props: HelperComponentProps) => (
        <>{breakpointMatches.isSm && props.children}</>
      ),
      'MdOrLarger': (props: HelperComponentProps) => (
        <>{breakpointMatches.isMd && props.children}</>
      ),
      'LgOrLarger': (props: HelperComponentProps) => (
        <>{breakpointMatches.isLg && props.children}</>
      ),
      'XlOrLarger': (props: HelperComponentProps) => (
        <>{breakpointMatches.isXl && props.children}</>
      ),
      // Custom query components
      ...Object.keys(customQueriesPx).reduce(
        (acc, key) => {
          const componentName = key.charAt(0).toUpperCase() + key.slice(1)
          acc[componentName] = (props: HelperComponentProps): JSX.Element => (
            <>{customMatches[key] && props.children}</>
          )
          return acc
        },
        {} as Record<string, (props: GenericChildrenType) => JSX.Element>,
      ),
    }),
    [breakpointMatches, customMatches, isExactBreakpoint, customQueriesPx],
  )

  return {
    containerRef,
    queries: { ...breakpointMatches, ...customMatches },
    components,
  }
}
