import React from "react"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "@kaizen/design-tokens"
import styles from "./useMediaQueries.scss"

type Props = { [key: string]: string }

export const useMediaQueries = (propQueries: Props) => {
  const theme = useTheme()

  // TODO: max-width usage needs to be -1px
  const kaizenQueries = {
    isSmall: useMediaQuery({
      query: `(max-width: ${theme.layout.breakpoints.medium})`,
    }),
    isMedium: useMediaQuery({
      query: `(min-width: ${theme.layout.breakpoints.medium}) and (max-width: ${theme.layout.breakpoints.large})`,
    }),
    isLarge: useMediaQuery({
      query: `(min-width: ${theme.layout.breakpoints.large})`,
    }),
    isMediumDown: useMediaQuery({
      query: `(max-width: ${theme.layout.breakpoints.large})`,
    }),
    isMediumUp: useMediaQuery({
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
    SmallOnly: (props: any) => (
      <div className={styles.smallOnly}>{props.children}</div>
    ),
    MediumOnly: (props: any) => (
      <div className={styles.mediumOnly}>{props.children}</div>
    ),
    LargeOnly: (props: any) => (
      <div className={styles.largeOnly}>{props.children}</div>
    ),
    MediumUp: (props: any) => (
      <div className={styles.mediumUp}>{props.children}</div>
    ),
    MediumDown: (props: any) => (
      <div className={styles.mediumDown}>{props.children}</div>
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
