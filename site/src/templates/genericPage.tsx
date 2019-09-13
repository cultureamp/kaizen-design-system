import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"

export default ({ data, pageContext, location }) => {
  const md = data.mdx

  return (
    <Layout pageTitle={md.frontmatter.title} currentPath={location.pathname}>
      <h1>{md.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <pre>data: {JSON.stringify(data)}</pre>
      <pre>pageContext: {JSON.stringify(pageContext)}</pre>
      <pre>location.pathname: {JSON.stringify(location.pathname)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
