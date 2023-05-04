import React, { useEffect, useState, ReactNode, useMemo } from "react"
import { useTheme } from "@kaizen/design-tokens"

type Props = { [key: string]: string }
type GenericChildrenType = { children?: ReactNode }

export const subtractOnePixel = (breakpoint: string): string =>
  `${parseInt(breakpoint, 10) - 1}px`

export const useMediaQueries = (
  propQueries: Props = {}
): {
  queries: {
    [key: string]: boolean
    isSmall: boolean
    isMedium: boolean
    isLarge: boolean
    isMediumOrSmaller: boolean
    isMediumOrLarger: boolean
  }
  components: {
    [key: string]: (props: GenericChildrenType) => JSX.Element
    SmallOnly: (props: GenericChildrenType) => JSX.Element
    MediumOnly: (props: GenericChildrenType) => JSX.Element
    LargeOnly: (props: GenericChildrenType) => JSX.Element
    MediumOrSmaller: (props: GenericChildrenType) => JSX.Element
    MediumOrLarger: (props: GenericChildrenType) => JSX.Element
  }
} => {
  if (typeof window === "undefined") {
    return {
      queries: {
        isSmall: false,
        isMedium: false,
        isLarge: false,
        isMediumOrSmaller: false,
        isMediumOrLarger: true,
      },
      components: {
        SmallOnly: () => <></>,
        MediumOnly: () => <></>,
        LargeOnly: () => <></>,
        MediumOrSmaller: () => <></>,
        MediumOrLarger: (props: HelperComponentProps) => <>{props.children}</>,
      },
    }
  }
  const theme = useTheme()

  // The `addEventListener` calls blow up legacy Edge (<= v18/pre chromium),
  // so we disable the functionality of updating after page load.
  const isLegacyEdge = navigator.userAgent.match(/Edge/)
  const isUnsupportedSafari =
    window.matchMedia("").addEventListener === undefined

  // ---------------------------------------
  // Create Kaizen breakpoint matches for initial state
  // ---------------------------------------
  const smallMatchMedia = useMemo(
    () =>
      window.matchMedia(
        `(max-width: ${subtractOnePixel(theme.layout.breakpoints.medium)})`
      ),
    [theme.layout.breakpoints.medium]
  )

  const mediumMatchMedia = useMemo(
    () =>
      window.matchMedia(
        `(min-width: ${
          theme.layout.breakpoints.medium
        }) and (max-width: ${subtractOnePixel(theme.layout.breakpoints.large)})`
      ),
    [theme.layout.breakpoints.large]
  )
  const largeMatchMedia = useMemo(
    () => window.matchMedia(`(min-width: ${theme.layout.breakpoints.large})`),
    [theme.layout.breakpoints.large]
  )

  const isSmall = smallMatchMedia.matches || false
  const isMedium = mediumMatchMedia.matches || false
  const isLarge = largeMatchMedia.matches || false

  const [kaizenMatches, setKaizenMatches] = useState<{
    isSmall: boolean
    isMedium: boolean
    isLarge: boolean
    isMediumOrSmaller: boolean
    isMediumOrLarger: boolean
  }>({
    isSmall,
    isMedium,
    isLarge,
    isMediumOrSmaller: !isLarge,
    isMediumOrLarger: !isSmall,
    // Note: ^the last two will need an adjustment in logic if/when we add more breakpoints
  })

  // ---------------------------------------
  // Create an event listener based on the medium breakpoint and update state whenever it changes
  // ---------------------------------------
  useEffect(() => {
    if (isLegacyEdge || isUnsupportedSafari) {
      return
    }

    const updateMatches = (): void => {
      const isSmallAfterUpdate = smallMatchMedia.matches || false
      const isMediumAfterUpdate = mediumMatchMedia.matches || false
      const isLargeAfterUpdate = largeMatchMedia.matches || false

      setKaizenMatches({
        isSmall: isSmallAfterUpdate,
        isMedium: isMediumAfterUpdate,
        isLarge: isLargeAfterUpdate,
        isMediumOrSmaller: !isLargeAfterUpdate,
        isMediumOrLarger: !isSmallAfterUpdate,
      })
    }

    mediumMatchMedia.addEventListener("change", updateMatches, true)

    return () => {
      mediumMatchMedia.removeEventListener("change", updateMatches)
    }
  }, [])

  // ---------------------------------------
  // Create custom queries matches for initial state
  // ---------------------------------------
  const customQueryMatchMedias = new Map()
  const customQueryMatches: Record<string, boolean> = {}
  new Map(Object.entries(propQueries)).forEach((queryString, queryName) => {
    const matchMedia = window.matchMedia(queryString)
    customQueryMatches[queryName] = matchMedia.matches || false

    // Store this matchMedia so that we can loop over it later and add event listeners
    customQueryMatchMedias.set(queryName, matchMedia)
  })

  const [customMatches, setCustomMatches] =
    useState<Record<string, boolean>>(customQueryMatches)

  // ---------------------------------------
  // Create an event listener for each custom query
  // ---------------------------------------
  useEffect(() => {
    if (isLegacyEdge || isUnsupportedSafari) {
      return
    }

    const updateCustomMatches = (
      matchMedia: MediaQueryList,
      queryName: string
    ): void =>
      setCustomMatches({
        ...customQueryMatches,
        [queryName]: matchMedia.matches || false,
      })

    const allEventListeners = new Map()
    customQueryMatchMedias.forEach((matchMedia, queryName) => {
      // Store this method so that we can reference it in the cleanup function below
      const updateCustomMatchesForQuery = (): void => {
        updateCustomMatches(matchMedia, queryName)
      }
      allEventListeners.set(matchMedia, updateCustomMatchesForQuery)

      // Add the event listener
      matchMedia.addEventListener("change", updateCustomMatchesForQuery, true)
    })

    return () => {
      allEventListeners.forEach((eventListener, matchMedia) => {
        matchMedia.removeEventListener("change", eventListener)
      })
    }
  }, [])

  // ---------------------------------------
  // Create Kaizen helper components
  // ---------------------------------------
  type HelperComponentProps = {
    children?: ReactNode
  }

  const kaizenComponents = {
    SmallOnly: (props: HelperComponentProps) => (
      <>{kaizenMatches.isSmall && props.children}</>
    ),
    MediumOnly: (props: HelperComponentProps) => (
      <>{kaizenMatches.isMedium && props.children}</>
    ),
    LargeOnly: (props: HelperComponentProps) => (
      <>{kaizenMatches.isLarge && props.children}</>
    ),
    MediumOrSmaller: (props: HelperComponentProps) => (
      <>{kaizenMatches.isMediumOrSmaller && props.children}</>
    ),
    MediumOrLarger: (props: HelperComponentProps) => (
      <>{kaizenMatches.isMediumOrLarger && props.children}</>
    ),
  }

  // ---------------------------------------
  // Create custom query helper components
  // ---------------------------------------
  const customComponents: Record<
    string,
    (props: GenericChildrenType) => JSX.Element
  > = {}
  Object.keys(propQueries).map(key => {
    const componentName = key.charAt(0).toUpperCase() + key.slice(1)
    customComponents[componentName] = (
      props: HelperComponentProps
    ): JSX.Element => <>{customMatches[key] && props.children}</>
  })

  return {
    queries: { ...kaizenMatches, ...customQueryMatches },
    components: { ...kaizenComponents, ...customComponents },
  }
}
