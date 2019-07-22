import * as React from "react"
import { graphql } from "gatsby"
import Head from "../components/Head"
import MainNav from "../components/MainNav"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <Head pageTitle="Guidelines" />
      <MainNav currentPath={location.pathname} />
      <h1>Guidelines page</h1>

      {edges.map(node => (
        <p>{JSON.stringify(node)}</p>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { navPage: { eq: "guidelines" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
