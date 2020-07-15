import React from "react"
import { render } from "react-dom"
import {
  Link as NavLink,
  NavigationBar,
} from "../../packages/component-library/components/NavigationBar"

export const SiteHeader = () => (
  <NavigationBar>
    {{
      primary: [
        <NavLink text="Home" href="" />,
        <NavLink text="Guidelines" href="" />,
        <NavLink text="Language" href="" />,
        <NavLink text="Components" href="" />,
        <NavLink text="Storybook" href="" />,
      ],
    }}
  </NavigationBar>
)

const node = document.createElement("div")
render(<SiteHeader />, node)
document.body.insertAdjacentElement("afterbegin", node)
