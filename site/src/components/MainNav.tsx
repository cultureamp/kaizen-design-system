import {
  Link as NavLink,
  NavigationBar,
} from "@cultureamp/kaizen-component-library"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import * as React from "react"

type MainNavProps = {
  currentPath?: string
}

const MainNav: React.SFC<MainNavProps> = ({ currentPath = "" }) => {
  const data = useStaticQuery(graphql`
    query MainNavComponentsQuery {
      allMdx(filter: { fields: { slug: { regex: "^/components/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const firstComponentPath = data.allMdx!.edges[0]!.node!.fields!.slug

  const currentPathStartsWith = (path: string) =>
    currentPath.startsWith(withPrefix(path))

  return (
    <NavigationBar colorScheme="kaizen">
      <NavLink
        text="Home"
        href={withPrefix("/")}
        active={withPrefix(currentPath) == withPrefix("/")}
      />
      <NavLink
        text="Guidelines"
        href={withPrefix("/guidelines/overview")}
        active={currentPathStartsWith("/guidelines")}
      />
      <NavLink
        text="Components"
        href={withPrefix(firstComponentPath)}
        active={currentPathStartsWith("/components")}
      />
      <NavLink
        text="Storybook"
        href={withPrefix("/storybook")}
        active={currentPathStartsWith("/storybook")}
      />
    </NavigationBar>
  )
}

export default MainNav
