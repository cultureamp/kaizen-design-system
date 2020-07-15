import React from "react"
import { render } from "react-dom"
import {
  Link as NavLink,
  NavigationBar,
} from "../../packages/component-library/components/NavigationBar"

const styles = require("./header.module.scss")

export const SiteHeader = () => {
  let branch = ""
  if (window.location.hostname.includes("dev")) {
    // the dev branch is appended before the rest of the pathname
    // given this component will only ever mount on storybook-static
    // strip that from the path
    branch = window.location.pathname
      .split("/")
      .filter(curr => curr !== "" && curr !== "storybook-static")
      .join("/")
  }
  const baseUrl = `${window.location.origin}/${branch}`

  return (
    <div className={styles.wrapper}>
      <NavigationBar>
        {{
          primary: [
            <NavLink text="Home" href="/" />,
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
              href={`${baseUrl}storybook-static`}
              active={true}
            />,
          ],
        }}
      </NavigationBar>
    </div>
  )
}
/**
 * Inject the nav header before the root node that storybook
 * uses to mount
 */
const node = document.createElement("div")
render(<SiteHeader />, node)
document.body.insertAdjacentElement("afterbegin", node)
