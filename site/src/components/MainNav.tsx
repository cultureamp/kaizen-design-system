import * as React from "react"
import {
  Link as NavLink,
  NavigationBar,
} from "@cultureamp/kaizen-component-library"

type MainNavProps = {
  currentPath?: string
}

const MainNav: React.SFC<MainNavProps> = ({ currentPath = "" }) => (
  <NavigationBar>
    <NavLink text="Home" href="/" active={currentPath == "/"} />
    <NavLink
      text="Guidelines"
      href="/guidelines"
      active={/^\/guidelines/.test(currentPath)}
    />
    <NavLink
      text="Components"
      href="/components"
      active={/^\/components/.test(currentPath)}
    />
    <NavLink
      text="Status"
      href="/status"
      active={/^\/status/.test(currentPath)}
    />
  </NavigationBar>
)

export default MainNav
