import { Link as NavLink, NavigationBar } from "@kaizen/component-library"
import { withPrefix } from "gatsby"
import * as React from "react"

type MainNavProps = {
  currentPath?: string
}

class MainNav extends React.Component<MainNavProps> {
  render() {
    const { currentPath = "" } = this.props
    const currentPathStartsWith = (path: string) =>
      currentPath.startsWith(withPrefix(path))

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
              href={withPrefix("/storybook")}
              active={currentPathStartsWith("/storybook")}
            />,
          ],
        }}
      </NavigationBar>
    )
  }
}

export default MainNav
