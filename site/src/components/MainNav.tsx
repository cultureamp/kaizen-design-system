import {
  Link as NavLink,
  NavigationBar,
} from "@cultureamp/kaizen-component-library"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

type MainNavProps = {
  currentPath?: string
}

const MainNav: React.SFC<MainNavProps> = ({ currentPath = "" }) => {
  const data = useStaticQuery(graphql`
    query ComponentsQuery {
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

  return (
    <NavigationBar colorScheme="kaizen">
      <NavLink text="Home" href="/" active={currentPath == "/"} />
      <NavLink
        text="Guidelines"
        href="/guidelines/overview"
        active={/^\/guidelines/.test(currentPath)}
      />
      <NavLink
        text="Components"
        href={firstComponentPath}
        active={/^\/components/.test(currentPath)}
      />
      <NavLink
        text="Status"
        href="/status"
        active={/^\/status/.test(currentPath)}
      />
    </NavigationBar>
  )
}

export default MainNav
