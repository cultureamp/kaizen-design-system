import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { SidebarAndContent, Content } from "../components/SidebarAndContent"
import ComponentsSidebar from "../components/ComponentsSidebar"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout pageTitle="Components" currentPath={location.pathname}>
      <SidebarAndContent>
        <ComponentsSidebar />

        <Content>
          <h1>Components page</h1>

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
        </Content>
      </SidebarAndContent>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/components/" } } }
    ) {
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
