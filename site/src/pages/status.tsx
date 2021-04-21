import { graphql, Link } from "gatsby"
import { ThemeManager, ThemeProvider, heartTheme } from "@kaizen/design-tokens"
import * as React from "react"
import Layout from "../components/Layout"

export default ({ data, location }) => {
  const themeManager = new ThemeManager(heartTheme)
  const { edges } = data.allMdx

  return (
    <ThemeProvider themeManager={themeManager}>
      <Layout pageTitle="Status" currentPath={location.pathname}>
        <div>
          <h1>Status page</h1>
          <ul>
            {edges.map(
              node =>
                node!.node!.fields!.slug! && (
                  <li>
                    <Link to={node.node.fields.slug}>
                      {node.node.frontmatter.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fields: { slug: { regex: "^/status/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
