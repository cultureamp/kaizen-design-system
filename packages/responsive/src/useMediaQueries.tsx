import React, { FC } from "react"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "@kaizen/design-tokens"

type Props = { [key: string]: string }

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

  const kaizenQueries = {
    isSmall: useMediaQuery({
      query: `(max-width: ${minus1Px(theme.layout.breakpoints.medium)})`,
    }),
    isMedium: useMediaQuery({
      query: `(min-width: ${
        theme.layout.breakpoints.medium
      }) and (max-width: ${minus1Px(theme.layout.breakpoints.large)})`,
    }),
    isLarge: useMediaQuery({
      query: `(min-width: ${theme.layout.breakpoints.large})`,
    }),
    isMediumOrSmaller: useMediaQuery({
      query: `(max-width: ${minus1Px(theme.layout.breakpoints.large)})`,
    }),
    isMediumOrLarger: useMediaQuery({
      query: `(min-width: ${theme.layout.breakpoints.medium})`,
    }),
  }

  const customQueries = {}
  Object.keys(propQueries).map(key => {
    customQueries[key] = useMediaQuery({
      query: propQueries[key],
    })
  })

  const kaizenComponents = {
    SmallOnly: (props: any) => <>{kaizenQueries.isSmall && props.children}</>,
    MediumOnly: (props: any) => <>{kaizenQueries.isMedium && props.children}</>,
    LargeOnly: (props: any) => <>{kaizenQueries.isLarge && props.children}</>,
    MediumOrSmaller: (props: any) => (
      <>{kaizenQueries.isMediumOrSmaller && props.children}</>
    ),
    MediumOrLarger: (props: any) => (
      <>{kaizenQueries.isMediumOrLarger && props.children}</>
    ),
  }

  const customComponents = {}
  Object.keys(propQueries).map(key => {
    const componentName = key.charAt(0).toUpperCase() + key.slice(1)
    customComponents[componentName] = (props: any) => (
      <>{customQueries[key] && props.children}</>
    )
  })

  const queries = { ...kaizenQueries, ...customQueries }
  const components = { ...kaizenComponents, ...customComponents }

  return { queries, components }
}

const minus1Px = (breakpoint: string) => `${parseInt(breakpoint, 10) - 1}px`
