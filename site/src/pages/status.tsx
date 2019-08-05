import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
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
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { regex: "^/status/" } } }) {
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
