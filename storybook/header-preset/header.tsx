import React from "react"
import { render } from "react-dom"
import {
  Link as NavLink,
  NavigationBar,
} from "../../packages/component-library/components/NavigationBar"

const styles = require("./header.module.scss")

export const SiteHeader = () => (
  <div className={styles.wrapper}>
    <NavigationBar>
      {{
        primary: [
          <NavLink text="Home" href="/" />,
          <NavLink text="Guidelines" href="/guidelines/overview/" />,
          <NavLink text="Language" href="/language/overview/" />,
          <NavLink text="Components" href="/components/overview/" />,
          <NavLink text="Storybook" href="/storybook-static" active={true} />,
        ],
      }}
    </NavigationBar>
  </div>
)

/**
 * Inject the nav header before the root node that storybook
 * uses to mount
 */
const node = document.createElement("div")
render(<SiteHeader />, node)
document.body.insertAdjacentElement("afterbegin", node)
