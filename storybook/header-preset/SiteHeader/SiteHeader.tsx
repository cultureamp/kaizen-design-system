/* eslint-disable ssr-friendly/no-dom-globals-in-react-fc */
import React from "react"
import { Link as NavLink, NavigationBar } from "./NavigationBar"
import styles from "./SiteHeader.module.scss"

export const SiteHeader = (): JSX.Element => {
  const getBaseUrl = (pathname, origin, hostname): string => {
    let branch = ""
    if (hostname.match(/^dev/)) {
      // the dev branch is appended before the rest of the pathname
      // given this component will only ever mount on storybook-static
      // strip that from the path
      const branchName = pathname.match(/(.+)?\/storybook/)
      branch = branchName && branchName.length > 1 ? String(branchName[1]) : ""
    }

    return `${origin}${branch}`
  }

  const baseUrl = getBaseUrl(
    window.location.pathname,
    window.location.origin,
    window.location.hostname
  )

  return (
    <div className={styles.wrapper}>
      <NavigationBar
        logoUrl={baseUrl}
        links={[
          <NavLink text="Home" href={baseUrl} />,
          <NavLink
            text="Guidelines"
            href={`${baseUrl}/guidelines/overview/`}
          />,
          <NavLink text="Language" href={`${baseUrl}/language/overview/`} />,
          <NavLink
            text="Components"
            href={`${baseUrl}/components/overview/`}
          />,
          <NavLink
            text="Storybook"
            href={`${baseUrl}/storybook`}
            active={true}
          />,
        ]}
      />
    </div>
  )
}
