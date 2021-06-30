import React, { FC, useEffect, useState } from "react"
import { useTheme } from "@kaizen/design-tokens"

type Props = { [key: string]: string }

const minus1Px = (breakpoint: string) => `${parseInt(breakpoint, 10) - 1}px`

export const useMediaQueries = (
  propQueries: Props
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
    [key: string]: FC
    SmallOnly: FC
    MediumOnly: FC
    LargeOnly: FC
    MediumOrSmaller: FC
    MediumOrLarger: FC
  }
} => {
  const theme = useTheme()

  // ---------------------------------------
  // Create Kaizen breakpoint matches for initial state
  // ---------------------------------------
  const smallMatchMedia = window.matchMedia(
    `(max-width: ${minus1Px(theme.layout.breakpoints.medium)})`
  )
  const mediumMatchMedia = window.matchMedia(
    `(min-width: ${theme.layout.breakpoints.medium}) and (max-width: ${minus1Px(
      theme.layout.breakpoints.large
    )})`
  )
  const largeMatchMedia = window.matchMedia(
    `(min-width: ${theme.layout.breakpoints.large})`
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
    const updateMatches = () => {
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
  const customQueryMatches = {}
  new Map(Object.entries(propQueries)).forEach((queryString, queryName) => {
    const matchMedia = window.matchMedia(queryString)
    customQueryMatches[queryName] = matchMedia.matches || false

    // Store this matchMedia so that we can loop over it later and add event listeners
    customQueryMatchMedias.set(queryName, matchMedia)
  })

  const [customMatches, setCustomMatches] = useState<{
    [key: string]: boolean
  }>(customQueryMatches)

  // ---------------------------------------
  // Create an event listener for each custom query
  // ---------------------------------------
  useEffect(() => {
    const updateCustomMatches = (
      matchMedia: MediaQueryList,
      queryName: string
    ) =>
      setCustomMatches({
        ...customQueryMatches,
        [queryName]: matchMedia.matches || false,
      })

    const allEventListeners = new Map()
    customQueryMatchMedias.forEach((matchMedia, queryName) => {
      // Store this method so that we can reference it in the cleanup function below
      const updateCustomMatchesForQuery = () => {
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
  const kaizenComponents = {
    SmallOnly: (props: any) => <>{kaizenMatches.isSmall && props.children}</>,
    MediumOnly: (props: any) => <>{kaizenMatches.isMedium && props.children}</>,
    LargeOnly: (props: any) => <>{kaizenMatches.isLarge && props.children}</>,
    MediumOrSmaller: (props: any) => (
      <>{kaizenMatches.isMediumOrSmaller && props.children}</>
    ),
    MediumOrLarger: (props: any) => (
      <>{kaizenMatches.isMediumOrLarger && props.children}</>
    ),
  }

  // ---------------------------------------
  // Create custom query helper components
  // ---------------------------------------
  const customComponents = {}
  Object.keys(propQueries).map(key => {
    const componentName = key.charAt(0).toUpperCase() + key.slice(1)
    customComponents[componentName] = (props: any) => (
      <>{customMatches[key] && props.children}</>
    )
  })

  return {
    queries: { ...kaizenMatches, ...customQueryMatches },
    components: { ...kaizenComponents, ...customComponents },
  }
}
