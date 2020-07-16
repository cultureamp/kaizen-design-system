import { Link as NavLink, NavigationBar } from "@kaizen/component-library"
import { withPrefix } from "gatsby"
import * as React from "react"

type MainNavProps = {
  currentPath?: string
}

type MainPropsState = {
  externalUrl: string
}

class MainNav extends React.Component<MainNavProps, MainPropsState> {
  public state = {
    externalUrl: "",
  }

  componentDidMount() {
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
    this.state = { externalUrl: `${window.location.origin}/${branch}` }
  }

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
              href={`${this.state.externalUrl}/storybook`}
              active={currentPathStartsWith("/storybook")}
            />,
          ],
        }}
      </NavigationBar>
    )
  }
}

export default MainNav
