import * as React from "react"
import {
  Link as NavLink,
  NavigationBar,
} from "@cultureamp/kaizen-component-library"

type MainNavProps = {
  currentPath?: string
}

const MainNav: React.SFC<MainNavProps> = props => (
  <NavigationBar>
    <NavLink text="Home" href="/" active={props.currentPath == "/"} />
    <NavLink
      text="Components"
      href="/components"
      active={props.currentPath == "/components"}
    />
    <NavLink
      text="Guidelines"
      href="/guidelines"
      active={props.currentPath == "/guidelines"}
    />
    <NavLink
      text="Status"
      href="/status"
      active={props.currentPath == "/status"}
    />
  </NavigationBar>
)

export default MainNav
