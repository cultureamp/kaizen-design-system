import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout pageTitle="Guidelines" currentPath={location.pathname}>
      <div>
        <h1>Guidelines page</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/guidelines/" } } }
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
