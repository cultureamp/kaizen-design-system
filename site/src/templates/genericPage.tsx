import React from "react"
import { graphql } from "gatsby"
import Head from "../components/Head"
import MainNav from "../components/MainNav"

export default ({ data }) => {
  const markdownContent = data.markdownRemark
  return (
    <>
      {/* <Head pageTitle="" />
      <MainNav currentPath={props.location.pathname} /> */}
      <h1>{markdownContent.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownContent.html }} />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
