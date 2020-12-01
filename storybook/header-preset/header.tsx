/* eslint import/no-extraneous-dependencies: 0 */

/**
 * This file is the Storybook-specific header. The Gatsby header is
 * located site/src/components/MainNav
 */
import React from "react"
import { Link as NavLink, NavigationBar } from "@kaizen/component-library"
import styles from "./header.module.scss"

const SiteHeader = () => {
  const getBaseUrl = (pathname, origin, hostname) => {
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
      <NavigationBar>
        {{
          primary: [
            <NavLink text="Home" href={`${baseUrl}`} />,
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
          ],
        }}
      </NavigationBar>
    </div>
  )
}

export default SiteHeader
