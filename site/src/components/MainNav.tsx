/**
 * This file is the Gatsby-specific header. The Storybook header is
 * located storybook/header-preset/header
 */
import { withPrefix } from "gatsby"
import * as React from "react"
import { Link as NavLink, NavigationBar } from "./NavigationBar"

type MainNavProps = {
  currentPath?: string
}

const MainNav: React.SFC<MainNavProps> = ({ currentPath = "" }) => {
  const currentPathStartsWith = (path: string) =>
    currentPath.startsWith(withPrefix(path))

  return (
    <NavigationBar
      links={[
        <NavLink
          text="Home"
          href={withPrefix("/")}
          active={currentPath === withPrefix("/")}
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
      ]}
    />
  )
}

export default MainNav
