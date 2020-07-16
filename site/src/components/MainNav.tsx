import { Link as NavLink, NavigationBar } from "@kaizen/component-library"
import { withPrefix } from "gatsby"
import * as React from "react"

type MainNavProps = {
  currentPath?: string
}

const MainNav: React.SFC<MainNavProps> = ({ currentPath = "" }) => {
  const currentPathStartsWith = (path: string) =>
    currentPath.startsWith(withPrefix(path))

  let branch = ""
  if (window.location.hostname.includes("dev")) {
    // the dev branch is appended before the rest of the pathname
    // given this component will only ever mount on storybook-static
    // strip that from the path.
    branch = window.location.pathname
      .split("/")
      .filter(curr => curr !== "" && curr !== "storybook-static")
      .join("/")
  }
  // storybook is hosted outside of Gatsby, so we cannot use `withPrefix`
  const baseUrl = `${window.location.origin}/${branch}`

  return (
    <NavigationBar>
      {{
        primary: [
          <NavLink
            text="Home"
            href={withPrefix("/")}
            active={withPrefix(currentPath) == withPrefix("/")}
          />,
          <NavLink
            text="Guidelines"
            href={withPrefix("/guidelines/overview")}
            active={currentPathStartsWith("/guidelines")}
          />,
          <NavLink
            text="Language"
            href={withPrefix("/language/overview")}
            active={currentPathStartsWith("/language")}
          />,
          <NavLink
            text="Components"
            href={withPrefix("/components/overview")}
            active={currentPathStartsWith("/components")}
          />,
          <NavLink
            text="Storybook"
            href={`${baseUrl}/storybook`}
            active={currentPathStartsWith("/storybook")}
          />,
        ],
      }}
    </NavigationBar>
  )
}

export default MainNav
