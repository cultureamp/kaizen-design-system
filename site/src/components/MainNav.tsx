import * as React from "react"
import {
  Link as NavLink,
  NavigationBar,
} from "@cultureamp/kaizen-component-library"

export default ({ currentPath }) => (
  <NavigationBar>
    <NavLink text="Home" href="/" active={currentPath == "/"} />
    <NavLink
      text="Components"
      href="/components"
      active={currentPath == "/components"}
    />
    <NavLink
      text="Guidelines"
      href="/guidelines"
      active={currentPath == "/guidelines"}
    />
    <NavLink text="Status" href="/status" active={currentPath == "/status"} />
  </NavigationBar>
)
